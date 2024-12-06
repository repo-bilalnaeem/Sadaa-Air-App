import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const inset = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#255257",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(124, 131, 129, 1)",
        tabBarItemStyle: {
          paddingTop: 10,
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Book Flight",
          headerTitleStyle: {
            color: "#000",
          },
          headerTransparent: true,
          tabBarLabel: "Home",

          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "My Bookings",
          tabBarLabel: "Booking",
          headerShadowVisible: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="clipboard-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ size, color }) => (
            <Feather name="mail" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Personal Info",
          tabBarLabel: "Profile",
          headerBackButtonDisplayMode: "minimal",
          tabBarStyle: {
            display: "none",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ width: 24, height: 24, margin: 16 }}
            >
              <Octicons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
