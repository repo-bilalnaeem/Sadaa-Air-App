import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
  SafeAreaView,
} from "react-native";
import Svg, { Line } from "react-native-svg";
import { Link, router, useLocalSearchParams } from "expo-router";
import flights_data from "@/assets/data/search_flights.json";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card from "@/components/card";

const FlightDetails = () => {
  const { width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
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
      <View style={[styles.screen, { paddingTop: top }]}>
        {/* <View style={styles.card}>
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
            <Text
              style={[
                styles.left_date_time,
                {
                  zIndex: 20,
                  backgroundColor: "#fff",
                  paddingRight: "8%",
                  fontSize: 20,
                },
              ]}
            >
              {flight.departure_time
                .split("T")[1]
                .split(":")
                .slice(0, 2)
                .join(":")}
            </Text>
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
            <Text
              style={[
                styles.right_date_time,
                {
                  zIndex: 20,
                  backgroundColor: "#fff",
                  paddingLeft: "8%",
                  fontSize: 20,
                },
              ]}
            >
              {flight.arrival_time
                .split("T")[1]
                .split(":")
                .slice(0, 2)
                .join(":")}
            </Text>
          </View>

          <View style={styles.container}>
            <View>
              <Text style={styles.departure_code}>{flight.departure_code}</Text>

              <Text style={styles.departure_airport}>
                Jinnah{"\n"}International{"\n"}Airport
              </Text>
            </View>
            <View>
              <Text style={styles.arrival_code}>{flight.arrival_code}</Text>

              <Text style={styles.arrival_airport}>
                Dubai{"\n"}International{"\n"}Airport
              </Text>
            </View>
          </View>

        </View> */}

        <Card flight={flight} />
        <View style={styles.flex_amount}>
          <Text style={styles.price}>Price</Text>
          <Text style={styles.amount}>${flight.price}</Text>
        </View>
        <View style={styles.action_btn}>
          <Pressable
            style={styles.button_outline}
            onPress={() => router.replace("/")}
          >
            <Text style={[styles.button_text, { color: "#000" }]}>Cancel</Text>
          </Pressable>
          <Link href={`/seat?id=${id}`} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.button_text}>Confirm</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 16,
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    flexGrow: 1,
  },

  button_outline: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
    borderColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flexGrow: 1,
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

  price: {
    color: "#191919",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 21.66,
  },

  amount: {
    color: "#191919",
    textAlign: "right",
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 24,
  },

  flex_amount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10%",
    marginBottom: 20,
  },

  action_btn: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
});

export default FlightDetails;
