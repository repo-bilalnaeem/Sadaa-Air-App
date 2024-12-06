import React from "react";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
          presentation: "formSheet",
        }}
      />
      <Stack.Screen
        name="forget-password"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={styles.back_arrow}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="otp-verification"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={styles.back_arrow}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="reset-password"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={styles.back_arrow}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(authenticated)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  back_arrow: {
    width: 42,
    justifyContent: "center",
    backgroundColor: "#EBEEF2",
    padding: 8,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
  },
});

export default RootLayout;
