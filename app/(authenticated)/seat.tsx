import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

const Seat = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const insets = useSafeAreaInsets();

  const [seats, setSeats] = useState(
    Array.from({ length: 28 }, (_, index) => {
      if ([0, 2, 5, 7, 8, 9, 11, 13, 16, 17, 20, 21, 25].includes(index))
        return { id: index, status: "reserved" };
      if (
        [1, 3, 4, 6, 10, 12, 14, 15, 18, 19, 22, 23, 24, 26, 27, 28].includes(
          index
        )
      )
        return { id: index, status: "available" };
      return { id: index, status: "available" };
    })
  );

  const handleSeatPress = (seatId: number) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId
          ? {
              ...seat,
              status: seat.status === "selected" ? "available" : "selected",
            }
          : seat
      )
    );
  };

  const renderSeats = (
    startIndex: number | undefined,
    endIndex: number | undefined
  ) => {
    return (
      <View>
        {seats.slice(startIndex, endIndex).map((seat) => (
          <Pressable
            key={seat.id}
            style={[
              styles.seat,
              seat.status === "reserved" && { backgroundColor: "#D9D9D9" },
              seat.status === "available" && {
                backgroundColor: "#7C7270",
              },
              seat.status === "selected" && { backgroundColor: "#4CAF50" },
            ]}
            onPress={() => handleSeatPress(seat.id)}
            disabled={seat.status === "reserved"}
          >
            <Text style={styles.seatText}>{seat.id}</Text>
          </Pressable>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View
        style={[
          styles.options,
          Platform.OS === "android" && { paddingTop: insets.top * 3 },
          { paddingVertical: insets.top / 2 },
        ]}
      >
        <View style={styles.option}>
          <View style={styles.select} />
          <Text style={styles.text}>Selected</Text>
        </View>
        <View style={styles.option}>
          <View style={styles.emergency} />
          <Text style={styles.text}>Available</Text>
        </View>
        <View style={styles.option}>
          <View style={styles.reserved} />
          <Text style={styles.text}>Reserved</Text>
        </View>
      </View>
      <ImageBackground
        source={require("@/assets/images/plane illustration.png")}
        style={{ flex: 1 }}
        resizeMode="contain"
      >
        <View style={styles.gridContainer}>
          <View style={styles.flex_column}>
            {renderSeats(0, 7)}
            {renderSeats(7, 14)}
          </View>

          <View style={styles.spacer} />

          <View style={styles.flex_column}>
            {renderSeats(14, 21)}
            {renderSeats(21, 28)}
          </View>
        </View>
      </ImageBackground>
      <Pressable
        onPressIn={() => router.push(`/payment?id=${id}`)}
        style={[
          styles.button,
          Platform.OS === "android" && { marginBottom: 40, marginTop: 20 },
        ]}
      >
        <Text style={styles.button_text}>Confirm</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F9FBFA",
  },

  text: {
    color: "#555",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
  },

  select: {
    backgroundColor: "#255257",
    width: 14,
    height: 14,
    borderRadius: 50,
  },

  emergency: {
    backgroundColor: "#7C7270",
    width: 14,
    height: 14,
    borderRadius: 50,
  },

  reserved: {
    backgroundColor: "#D9D9D9",
    width: 14,
    height: 14,
    borderRadius: 50,
  },

  options: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  option: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "17%",
    marginTop: "50%",
  },

  flex_column: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },

  seat: {
    width: 40,
    height: 40,
    backgroundColor: "#CCC",
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  spacer: {
    width: 0,
  },

  button: {
    backgroundColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    marginHorizontal: 20,
  },

  button_text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 16,
  },

  seatText: {
    color: "#ddd",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 15,
  },
});

export default Seat;
