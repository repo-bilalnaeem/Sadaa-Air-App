import { useAuth } from "@clerk/clerk-expo";
import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Tab = () => {

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
          headerStyle: {
            height: 100,
          },
          // headerRight: () => (
          //   <TouchableOpacity onPressIn={onSignOutPress} style={{ margin: 16 }}>
          //     <Text
          //       style={{ fontWeight: "600", fontSize: 16, color: "#255257" }}
          //     >
          //       Log out
          //     </Text>
          //   </TouchableOpacity>
          // ),
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tab;
