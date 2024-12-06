import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card from "@/components/card";
import bookings from "@/assets/data/bookings.json";

const Booking = () => {
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={[styles.screen]}>
        {bookings.map((data, index) => (
          <>
            <Card key={index} flight={data} />
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
                <Text style={styles.detail}>{data.class}</Text>
              </View>
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.button_text}>Modify</Text>
            </Pressable>
          </>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 18,
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

  button: {
    backgroundColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 32,
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

export default Booking;
