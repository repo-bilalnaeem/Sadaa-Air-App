import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#255257",
        },
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
          headerTintColor: "#fff",
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "rgba(250, 211, 202, 1)",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
