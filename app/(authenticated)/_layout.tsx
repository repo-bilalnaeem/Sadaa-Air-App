import React from "react";
import { Feather } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="search"
        options={{
          headerTitle: "Search Result",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="departure-date"
        options={{
          presentation: "formSheet",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="flight/[id]"
        options={{
          headerTitle: "Flight details",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
