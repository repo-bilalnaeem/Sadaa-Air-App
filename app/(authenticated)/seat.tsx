import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {  router } from "expo-router";

const Seat = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.options, { paddingVertical: insets.top / 2 }]}>
        <View style={styles.option}>
          <View style={styles.select} />
          <Text style={styles.text}>Selected</Text>
        </View>
        <View style={styles.option}>
          <View style={styles.emergency} />
          <Text style={styles.text}>Emergency exit</Text>
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
            <View style={styles.column}>
              {Array.from({ length: 7 }).map((_, index) => (
                <View key={`left-seat-${index}`} style={styles.seat} />
              ))}
            </View>
            <View style={styles.column}>
              {Array.from({ length: 7 }).map((_, index) => (
                <View key={`left-seat-${index}`} style={styles.seat} />
              ))}
            </View>
          </View>

          <View style={styles.spacer} />

          <View style={styles.flex_column}>
            <View style={styles.column}>
              {Array.from({ length: 7 }).map((_, index) => (
                <View key={`right-seat-${index}`} style={styles.seat} />
              ))}
            </View>
            <View style={styles.column}>
              {Array.from({ length: 7 }).map((_, index) => (
                <View key={`right-seat-${index}`} style={styles.seat} />
              ))}
            </View>
          </View>
        </View>
      </ImageBackground>
      <Pressable
        onPressIn={() => router.push(`/payment?id=${id}`)}
        style={styles.button}
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
    paddingHorizontal: "14%",
    marginTop: "50%",
  },

  flex_column: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },

  column: {
    flexDirection: "column",
    // justifyContent: "space-between",
  },

  seat: {
    width: 40,
    height: 40,
    backgroundColor: "#CCC",
    marginBottom: 10,
    borderRadius: 5,
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
});

export default Seat;
