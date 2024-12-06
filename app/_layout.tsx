import React from "react";
import { useFonts } from "expo-font";
import { Href, router, Slot, Stack, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useLayoutEffect } from "react";
import "react-native-reanimated";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

SplashScreen.preventAutoHideAsync();

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

// Cache the Clerk JWT
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segmnents = useSegments();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded) return;
    console.log("User changed: ", isSignedIn);
    const inAuthGroup = segmnents[0] === "(authenticated)";

    if (isSignedIn && !inAuthGroup) {
      router.replace("/(tabs)" as Href);
    } else if (!isSignedIn) {
      router.replace("/signin");
    }
  }, [isSignedIn, isLoaded]);

  if (!loaded || !isLoaded) {
    return <Slot />;
  }

  return (
    <Stack initialRouteName="signin">
      <Stack.Screen
        name="signin"
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

const RootLayoutNav = () => {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={CLERK_PUBLISHABLE_KEY!}
    >
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
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

export default RootLayoutNav;
