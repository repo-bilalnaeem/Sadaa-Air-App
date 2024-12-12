import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Pressable,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link, router, useRouter } from "expo-router";
import SearchHook from "@/hooks/SearchHook";
import Offers from "@/components/Offers";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [traveller, setTraveller] = useState("");
  const [seat, setSeat] = useState("");
  const { selectedDate } = useLocalSearchParams<{ selectedDate?: string }>();

  const router = useRouter();

  useEffect(() => {
    if (selectedDate) {
      setDeparture(selectedDate); // Update departure date with selected value
    }
  }, [selectedDate]);

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const handleFromChange = (text: any) => {
    setFrom(text);
  };

  const handleToChange = (text: any) => {
    setTo(text);
  };

  const handleDepartureChange = (text: any) => {
    setDeparture(text);
  };

  const handleTravellerChange = (text: any) => {
    setTraveller(text);
  };

  const handleSeatChange = (text: any) => {
    setSeat(text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <TouchableWithoutFeedback onPress={handlePress} style={{ flex: 1 }}>
        <View
          style={[
            styles.screen,
            Platform.OS === "android"
              ? { paddingTop: top * 2.5 }
              : { marginTop: top },
          ]}
        >
          <View style={styles.options}>
            <Pressable style={styles.button_active}>
              <Text style={styles.option_active}>One way</Text>
            </Pressable>
            <Pressable
            // style={styles.button_inactive}
            >
              <Text style={styles.option_inactive}>Round</Text>
            </Pressable>
            <Pressable
            // style={styles.button_inactive}
            >
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
              autoCapitalize="words"
              edit={true}
            />

            <SearchHook
              label={"To"}
              placeHolder={"Dubai DXB"}
              value={to}
              onChangeText={handleToChange}
              imageSource={"plane-arrival"}
              autoCapitalize="words"
              edit={true}
            />

            <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
              <Link
                href={{
                  pathname: "/(authenticated)/departure-date",
                  params: { onDateSelect: "departure" },
                }}
                asChild
                // style={{ flex: 1 }}
              >
                <TouchableOpacity style={{ pointerEvents: "box-only" }}>
                  <SearchHook
                    label={"Departure"}
                    placeHolder={"15/07/2022"}
                    value={departure}
                    onChangeText={handleDepartureChange}
                    imageSource={"calendar-alt"}
                    edit={true}
                  />
                </TouchableOpacity>
              </Link>
              <SearchHook
                label={"Return"}
                placeHolder={"Return Date"}
                value={""}
                imageSource={"plus"}
                onChangeText={function (text: string): void {
                  throw new Error("Function not implemented.");
                }}
                edit={false}
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
                value={traveller}
                onChangeText={handleTravellerChange}
                imageSource={"user"}
                keyboardType="numeric"
                edit
              />
              <SearchHook
                label={"Class"}
                placeHolder={"Economy"}
                value={seat}
                onChangeText={handleSeatChange}
                imageSource={undefined}
                edit
              />
            </View>

            <Pressable
              style={[styles.button]}
              onPress={() =>
                from &&
                to &&
                departure &&
                router.push({
                  pathname: "/(authenticated)/search",
                  params: {
                    from_airport: from,
                    to_airport: to,
                    departure,
                  },
                })
              }
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
