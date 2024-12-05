import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import Svg, { Line } from "react-native-svg";
import { router, useLocalSearchParams } from "expo-router";
import flights_data from "@/assets/data/search_flights.json";

const FlightDetails = () => {
  const { width } = useWindowDimensions();
  const { flights } = flights_data;
  const { id } = useLocalSearchParams();

  const flight = flights.find((flight) => flight.id === id);
  if (!flight) {
    return (
      <View style={styles.container}>
        <Text>Flight not found.</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.card}>
        <View
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Text style={styles.departure_code}>{flight.departure_code}</Text>
          <View style={styles.iconContainer}>
            <Svg height="43" width={width} style={styles.dottedLine}>
              <Line
                x1="0"
                y1="10"
                x2={width}
                y2="10"
                stroke="rgba(208, 208, 208, 1)"
                strokeWidth="1"
                strokeDasharray="4,4"
              />
            </Svg>
            <Image
              source={require("@/assets/images/icon-splash.png")}
              style={{ width: 39.149, height: 43, resizeMode: "contain" }}
            />
          </View>
          <Text style={styles.arrival_code}>{flight.arrival_code}</Text>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={styles.left_date_time}>
              {flight.departure_time
                .split("T")[1]
                .split(":")
                .slice(0, 2)
                .join(":")}
            </Text>
            <Text style={styles.departure_airport}>
              {flight.departure_airport}
            </Text>
          </View>
          <View>
            <Text style={styles.right_date_time}>
              {flight.arrival_time
                .split("T")[1]
                .split(":")
                .slice(0, 2)
                .join(":")}
            </Text>
            <Text style={styles.arrival_airport}>{flight.arrival_airport}</Text>
          </View>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/flight-details")}
        >
          <Text style={styles.button_text}>Check</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 32,
    paddingBottom: 32,
    borderBottomColor: "#cacaca",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  company_time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image_style: {
    width: 43.5,
    height: 29,
    resizeMode: "contain",
  },
  flight_code: {
    color: "#191919",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 16,
  },

  departure_code: {
    backgroundColor: "#fff",
    zIndex: 20,
    paddingRight: "12%",
  },

  departure_airport: {
    color: "#555",
    textAlign: "left",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    marginVertical: 4,
  },

  arrival_code: {
    backgroundColor: "#fff",
    zIndex: 20,
    paddingLeft: "12%",
  },

  iconContainer: {
    alignItems: "center",
  },

  duration: {
    color: "#555",
    textAlign: "right",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 16,
  },

  dottedLine: {
    position: "absolute",
    top: 12,
    height: 1,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  right_date_time: {
    color: "#191919",
    textAlign: "right",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    marginVertical: 4,
  },
  left_date_time: {
    color: "#191919",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    marginVertical: 4,
  },

  arrival_airport: {
    color: "#555",
    textAlign: "right",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    marginVertical: 4,
  },

  flight_class: {
    color: "#555",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },

  button: {
    backgroundColor: "#255257",
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
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
  },

  class_price: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 4,
  },
});

export default FlightDetails;
