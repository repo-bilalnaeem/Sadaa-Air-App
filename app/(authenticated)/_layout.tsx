import React from "react";
import { Stack } from "expo-router";

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
      <Stack.Screen
        name="seat"
        options={{
          headerTitle: "Choose Seat",
          headerTransparent: true,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="payment"
        options={{
          headerTitle: "Payment",
          headerTransparent: true,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="boarding"
        options={{
          headerTitle: "Boarding Pass",
          headerTransparent: true,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
