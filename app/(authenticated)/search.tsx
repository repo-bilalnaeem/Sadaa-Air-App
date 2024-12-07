import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import flights_data from "@/assets/data/search_flights.json";
import Svg, { Line } from "react-native-svg";
import { Link, useLocalSearchParams } from "expo-router";

const Search = () => {
  const { flights } = flights_data;
  const { width } = useWindowDimensions();
  const { from_airport, to_airport, date } = useLocalSearchParams<{
    from_airport?: string;
    to_airport?: string;
    date?: string;
  }>();

  const filter_fligts = flights.filter(
    (flight) =>
      flight.departure_airport === from_airport &&
      flight.arrival_airport === to_airport
  );

  const renderFlightItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.company_time}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            source={{ uri: item.imageSource }}
            style={styles.image_style}
          />
          <Text style={styles.flight_code}>EK 2111</Text>
        </View>
        <Text style={styles.duration}>01 hr 40min</Text>
      </View>

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
        <Text style={styles.departure_code}>{item.departure_code}</Text>
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
        <Text style={styles.arrival_code}>{item.arrival_code}</Text>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.left_date_time}>
            {item.departure_time.split("T")[1].split(":").slice(0, 2).join(":")}
          </Text>
          <Text style={styles.departure_airport}>{item.departure_airport}</Text>
        </View>
        <View>
          <Text style={styles.right_date_time}>
            {item.arrival_time.split("T")[1].split(":").slice(0, 2).join(":")}
          </Text>
          <Text style={styles.arrival_airport}>{item.arrival_airport}</Text>
        </View>
      </View>
      <View style={styles.class_price}>
        <Text style={styles.flight_class}>{item.class} Class</Text>
        <Text
          style={{
            color: "#555",
            fontSize: 12,
            fontWeight: "300",
            lineHeight: 16,
          }}
        >
          From <Text style={styles.amount}>${item.price}</Text>
        </Text>
      </View>

      <Link href={`/flight/${item.id}`} style={styles.button} asChild>
        <Pressable>
          <Text style={styles.button_text}>Check</Text>
        </Pressable>
      </Link>
    </View>
  );



  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <FlatList
        data={flights}
        keyExtractor={(item) => item.id}
        bounces={false}
        renderItem={renderFlightItem}
        contentContainerStyle={{ paddingHorizontal: 18 }}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

  duration: {
    color: "#555",
    textAlign: "right",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 16,
  },

  company_time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  class_price: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 4,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginTop: 32,
    paddingBottom: 32,
    borderBottomColor: "#cacaca",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  departure_airport: {
    color: "#555",
    textAlign: "left",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
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

  flight_class: {
    color: "#555",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },

  amount: {
    color: "#191919",
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
  },

  iconContainer: {
    alignItems: "center",
    // overflow: "hidden",
  },
  dottedLine: {
    position: "absolute",
    top: 12,
    // width: 180,
    height: 1,
  },
  departure_code: {
    backgroundColor: "#fff",
    zIndex: 20,
    paddingRight: "12%",
  },
  arrival_code: {
    backgroundColor: "#fff",
    zIndex: 20,
    paddingLeft: "12%",
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
});

export default Search;
