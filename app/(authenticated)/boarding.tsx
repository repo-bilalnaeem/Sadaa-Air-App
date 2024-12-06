import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import Card from "@/components/Card";
import flights_data from "@/assets/data/search_flights.json";
import { router, useLocalSearchParams } from "expo-router";
import { Barcode } from "expo-barcode-generator";

const Boarding = () => {
  const { flights } = flights_data;
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
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginHorizontal: 18 }}>
        <Card flight={flight} />
        <View style={styles.information}>
          <View>
            <Text style={styles.label}>Flight</Text>
            <Text style={styles.detail}>IN 230</Text>
          </View>
          <View>
            <Text style={styles.label}>Gate</Text>
            <Text style={styles.detail}>22</Text>
          </View>
          <View>
            <Text style={styles.label}>Seat</Text>
            <Text style={styles.detail}>2B</Text>
          </View>
          <View>
            <Text style={styles.label}>Class</Text>
            <Text style={styles.detail}>{flight.class}</Text>
          </View>
        </View>
        <View style={styles.barcode}>
          <Barcode
            value="123456789999"
            options={{
              format: "UPC",
              background: "#ffffff",
              height: 50,
              fontSize: 10,
              width: 3,
              lineColor: "#424242",
            }}
          />
        </View>

        <Pressable onPressIn={() => router.replace("/(authenticated)/(tabs)")}>
          <Text style={styles.button_text}>Go Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  information: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    color: "#555",
    fontSize: 13,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
  },

  detail: {
    color: "#191919",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
  },

  barcode: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 32,
  },

  button_text: {
    textAlign: "center",
    color: "#255257",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 32,
  },
});

export default Boarding;
