import React from "react";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import SystemNavigationBar from "react-native-system-navigation-bar";
import { LogBox } from "react-native";

const Layout = () => {
  SystemNavigationBar.navigationHide();
  LogBox.ignoreAllLogs(true);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="search"
        options={{
          headerTitle: "Search Result",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={{ width: 24, height: 24 }}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="departure-date"
        options={{
          presentation: "formSheet",
          headerShown: false,
          sheetGrabberVisible: true,
        }}
      />
      <Stack.Screen
        name="flight/[id]"
        options={{
          headerTitle: "Flight details",
          gestureEnabled: false,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={{ width: 24, height: 24 }}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="seat"
        options={{
          headerTitle: "Choose Seat",
          headerTransparent: true,
          gestureEnabled: false,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={{ width: 24, height: 24 }}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="payment"
        options={{
          headerTitle: "Payment",
          headerTransparent: true,
          gestureEnabled: false,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={{ width: 24, height: 24 }}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="boarding"
        options={{
          headerTitle: "Boarding Pass",
          headerTransparent: true,
          gestureEnabled: false,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={{ width: 24, height: 24 }}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
