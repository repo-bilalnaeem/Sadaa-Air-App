import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import flights_data from "@/assets/data/search_flights.json";
import Card from "@/components/card";

const Payment = () => {
  const { flights } = flights_data;
  const { top } = useSafeAreaInsets();
  const { id } = useLocalSearchParams();

  const flight = flights.find((flight) => flight.id === id);

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

        <Link href={"/"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.button_text}>Confirm</Text>
          </Pressable>
        </Link>

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
