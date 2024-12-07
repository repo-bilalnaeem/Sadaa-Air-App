import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import flights_data from "@/assets/data/search_flights.json";
import Card from "@/components/Card";
import {
  PaymentSheet,
  presentPaymentSheet,
  useStripe,
} from "@stripe/stripe-react-native";
import { useCreatePaymentIntentMutation } from "@/slices/apiSlice";

const Payment = () => {
  const { flights } = flights_data;
  const { top } = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const { initPaymentSheet } = useStripe();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();

  const flight = flights.find((flight) => flight.id === id);

  const onCheckout = async () => {
    // 1. Create a payment intent
    const response = await createPaymentIntent({
      amount: flight!.price * 100 * 1,
      currency: "usd",
    });

    if (response.error) {
      console.log(response.error);
      Alert.alert("Something went wrong!");
      return;
    }

    // 2. Initialize the payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: "Sadaa Air",
      paymentIntentClientSecret: response.data.clientSecret,
    });

    if (initResponse.error) {
      console.log(initResponse.error.message);
      Alert.alert("Something wnet wring!");
      return;
    }

    // 3. Present the Payment Sheet from Stripe
    const paymentResponse = await presentPaymentSheet();
    if (paymentResponse.error) {
      Alert.alert(
        `Error code: ${paymentResponse.error.code}`,
        paymentResponse.error.message
      );
      return;
    }

    // 4. If payment ok -> create the order
    PaymentSheet;
    router.push(`/boarding?id=${id}`);
  };

  if (!flight) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Flight not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={[styles.screen, { paddingTop: top }]}>
        <Card flight={flight} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8%",
          }}
        >
          <Text style={styles.total}>Total</Text>
          <Text style={styles.amount}>${flight.price}</Text>
        </View>

        <Pressable style={styles.button} onPress={() => onCheckout()}>
          <Text style={styles.button_text}>Confirm</Text>
        </Pressable>

        <Pressable
          style={styles.button_outline}
          onPressIn={() => router.replace("/")}
        >
          <Text style={[styles.button_text, { color: "#000" }]}>Cancel</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 16,
  },

  button: {
    backgroundColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },

  button_outline: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
    borderColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },

  button_text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 16,
  },

  amount: {
    color: "#191919",
    textAlign: "right",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 24,
  },

  total: {
    color: "#555",
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 24,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Payment;
