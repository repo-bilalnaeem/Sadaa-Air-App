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
import SearchHook from "@/hooks/SearchHook";
import Offers from "@/components/Offers";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const handleFromChange = (text: any) => {
    setFrom(text);
  };

  const handleToChange = (text: any) => {
    setTo(text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={handlePress} style={{ flex: 1 }}>
        <View style={[styles.screen, { marginTop: top }]}>
          <View style={styles.options}>
            <Pressable style={styles.button_active}>
              <Text style={styles.option_active}>One way</Text>
            </Pressable>
            <Pressable style={styles.button_inactive}>
              <Text style={styles.option_inactive}>Round</Text>
            </Pressable>
            <Pressable style={styles.button_inactive}>
              <Text style={styles.option_inactive}>Multicity</Text>
            </Pressable>
          </View>
          <View style={styles.input}>
            <SearchHook
              label={"From"}
              placeHolder={"Karachi KHI"}
              value={from}
              onChangeText={handleFromChange}
              imageSource={"plane-departure"}
            />

            <SearchHook
              label={"To"}
              placeHolder={"Dubai DXB"}
              value={from}
              onChangeText={handleFromChange}
              imageSource={"plane-arrival"}
            />

            <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
              <SearchHook
                label={"Departure"}
                placeHolder={"15/07/2022"}
                value={from}
                onChangeText={handleFromChange}
                imageSource={"calendar-alt"}
              />
              <SearchHook
                label={"Return"}
                placeHolder={"Return Date"}
                value={from}
                onChangeText={handleFromChange}
                imageSource={"plus"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 16,
              }}
            >
              <SearchHook
                label={"Traveller"}
                placeHolder={"1 Adult"}
                value={from}
                onChangeText={handleFromChange}
                imageSource={"user"}
              />
              <SearchHook
                label={"Class"}
                placeHolder={"Economy"}
                value={from}
                onChangeText={handleFromChange}
                imageSource={undefined}
              />
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
      <Offers />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 16,
  },

  input: {
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(89, 27, 27, 0.05)",
    shadowOffset: { width: 5, height: 10 },
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  button: {
    backgroundColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
  },

  button_text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 16,
  },

  button_active: {
    backgroundColor: "#255257",
    borderRadius: 32,
  },

  option_inactive: {
    color: "#999",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },

  option_active: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },

  options: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 20,
    flexGrow: 0,
  },
});

export default Home;
