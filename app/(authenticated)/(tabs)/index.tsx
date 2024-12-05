import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const Home = () => {
  const { top } = useSafeAreaInsets();

  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={handlePress} style={{ flex: 1 }}>
        <View style={[styles.screen, { paddingTop: top }]}>
          <View style={styles.flight_options}>
            <Pressable style={styles.flight_btn_active}>
              <Text style={{ color: "#fff" }}>One Way</Text>
            </Pressable>
            <Pressable style={styles.flight_btn_inactive}>
              <Text style={{ color: "#999" }}>Rounded</Text>
            </Pressable>
            <Pressable style={styles.flight_btn_inactive}>
              <Text style={{ color: "#999" }}>Multicity</Text>
            </Pressable>
          </View>

          <View style={styles.input}>
            <View style={{ marginBottom: -16 }}>
              <Text style={styles.label}>From</Text>
              <View style={[styles.inputContainer, { marginBottom: 10 }]}>
                <Image
                  source={require("@/assets/images/takeoff.png")}
                  style={styles.icon}
                />
                <TextInput placeholder="Karachi KHI" style={styles.inputText} />
              </View>
              <Pressable
                style={{
                  alignSelf: "flex-end",
                  marginRight: 4,
                  borderRadius: 100,
                  borderWidth: StyleSheet.hairlineWidth,
                  padding: 3,
                  borderColor: "#E7E9EA",
                }}
              >
                <Ionicons
                  name="swap-vertical-outline"
                  size={20}
                  color={"#2584e9"}
                />
              </Pressable>
            </View>
            <View>
              <Text style={styles.label}>To</Text>
              <View style={[styles.inputContainer, { marginBottom: 10 }]}>
                <Image
                  source={require("@/assets/images/landing.png")}
                  style={styles.icon}
                />
                <TextInput placeholder="Dubai DXB" style={styles.inputText} />
              </View>
            </View>

            <View style={{ marginBottom: 16 }}>
              <Text style={styles.label}>Departure Date</Text>
              <Link href="/departure-date" asChild>
                <TouchableOpacity>
                  <View style={styles.inputContainer}>
                    <Image
                      source={require("@/assets/images/calendar.png")}
                      style={styles.icon}
                    />
                    <Text style={styles.inputText}>Select a date</Text>
                  </View>
                </TouchableOpacity>
              </Link>
            </View>

            <View>
              <Text style={styles.label}>Travelers</Text>
              <View style={styles.inputContainer}>
                <Image
                  source={require("@/assets/images/person.png")}
                  style={[styles.icon, { height: 25 }]}
                />
                <TextInput
                  placeholder="1 Adult , 0 child, 0 infant"
                  style={styles.inputText}
                />
              </View>
            </View>

            <Pressable
              style={styles.button}
              onPress={() => router.push("/search")}
            >
              <Text style={styles.button_text}>Search</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: "#fff",
    marginHorizontal: 16,
  },

  flight_options: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    marginVertical: 25,
    alignItems: "center",
    shadowColor: "rgba(56, 18, 18, 0.089)",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    flexGrow: 0,
    flexShrink: 1,
    borderRadius: 32,
    marginBottom: 18,
  },

  flight_btn_active: {
    paddingHorizontal: 16,
    backgroundColor: "#255257",
    paddingVertical: 5,
    borderRadius: 32,
  },
  flight_btn_inactive: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 32,
  },

  input: {
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(89, 27, 27, 0.05)",
    shadowOffset: { width: 5, height: 10 },
    paddingTop: 8,
    paddingBlock: 24,
    paddingHorizontal: 16,
  },

  label: {
    fontWeight: "600",
    color: "#414D5A",
    fontSize: 15,
    marginBottom: 8,
  },

  inputContainer: {
    backgroundColor: "#fefefe",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E8E9",
    flexDirection: "row",
    gap: 24,
    pointerEvents: "box-only",
  },

  inputText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 15,
  },

  icon: {
    tintColor: "rgba(85, 85, 85, 1)",
    width: 28,
    height: 20,
    resizeMode: "contain",
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

export default Home;
