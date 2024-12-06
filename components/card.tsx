import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Svg, { Line } from "react-native-svg";
import { useSegments } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

interface Flight {
  imageSource: string;
  departure_time: string;
  arrival_time: string;
  departure_code: string;
  departure_airport: string;
  arrival_airport: string;
  arrival_code: string;
}

interface CardProps {
  flight: Flight;
}

const Card = ({ flight }: CardProps) => {
  const { width } = useWindowDimensions();
  const { departure_time, arrival_time, departure_code, arrival_code } = flight;
  const segmenets = useSegments();

  const isPayemntRoute = segmenets.find((route) => route === "payment");
  // console.log(isPayemntRoute);

  return (
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
          {departure_time.split("T")[1].split(":").slice(0, 2).join(":")}
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
          {arrival_time.split("T")[1].split(":").slice(0, 2).join(":")}
        </Text>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.departure_code}>{departure_code}</Text>

          <Text style={styles.departure_airport}>
            Jinnah{"\n"}International{"\n"}Airport
          </Text>
        </View>
        <View>
          <Text style={styles.arrival_code}>{arrival_code}</Text>

          <Text style={styles.arrival_airport}>
            Dubai{"\n"}International{"\n"}Airport
          </Text>
        </View>
      </View>

      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <Text style={styles.lightLabelTag}>Date</Text>
          <View style={styles.passwordContainer}>
            <Image
              source={require("@/assets/images/calendar.png")}
              style={styles.image}
            />
            <TextInput
              value="15/07/2022"
              placeholderTextColor="gray"
              style={[styles.lightTextInput, styles.lightInputFocus]}
            />
          </View>
        </View>
        {isPayemntRoute ? (
          <View style={styles.inputContainer}>
            <Text style={styles.lightLabelTag}>Seat</Text>
            <View style={styles.passwordContainer}>
              <Image
                source={require("@/assets/images/calendar.png")}
                style={styles.image}
              />
              <TextInput
                value="2B"
                placeholderTextColor="gray"
                style={[styles.lightTextInput, styles.lightInputFocus]}
              />
            </View>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.lightLabelTag}>Time</Text>
            <View style={styles.passwordContainer}>
              <AntDesign
                name="clockcircleo"
                size={16}
                color="black"
                style={styles.image}
              />
              {/* <Image
                source={require("@/assets/images/calendar.png")}
                style={styles.image}
              /> */}
              <TextInput
                value="09:30"
                placeholderTextColor="gray"
                style={[styles.lightTextInput, styles.lightInputFocus]}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 32,
    paddingTop: "15%",
    borderTopColor: "#cacaca",
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  left_date_time: {
    color: "#191919",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    marginVertical: 4,
  },

  iconContainer: {
    alignItems: "center",
  },

  dottedLine: {
    position: "absolute",
    top: 12,
    height: 1,
  },

  right_date_time: {
    color: "#191919",
    textAlign: "right",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    marginVertical: 4,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  departure_code: {
    backgroundColor: "#fff",
    zIndex: 20,
    paddingRight: "12%",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },

  departure_airport: {
    color: "#666",
    textAlign: "left",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    marginVertical: 12,
  },

  arrival_code: {
    backgroundColor: "#fff",
    zIndex: 20,
    paddingLeft: "12%",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    textAlign: "right",
  },

  arrival_airport: {
    color: "#666",
    textAlign: "right",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    marginVertical: 14,
  },

  inputs: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginVertical: 20,
  },

  inputContainer: {
    marginBottom: 20,
    flexGrow: 1,
  },

  lightLabelTag: {
    fontSize: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    zIndex: 1,
    position: "absolute",
    top: -10,
    left: 20,
    color: "#555",
    fontWeight: "300",
  },

  passwordContainer: {
    position: "relative",
  },

  image: {
    width: 16,
    height: 16,
    position: "absolute",
    top: 17,
    left: 16,
    tintColor: "#000",
  },

  lightTextInput: {
    borderRadius: 17,
    borderWidth: 1.5,
    borderColor: "#CCC",
    height: 50,
    paddingHorizontal: 42,
    backgroundColor: "transparent",
    color: "#000",
  },
  lightInputFocus: {
    borderColor: "#E6E8E7",
    borderWidth: 1,
    fontSize: 14,
  },
});

export default Card;
