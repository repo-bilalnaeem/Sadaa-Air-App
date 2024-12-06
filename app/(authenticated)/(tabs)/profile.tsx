import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ProfileHook from "@/hooks/ProfileHook";
import { router } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Profile = () => {
  const { top } = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const { signOut } = useAuth();

  const handleNameChange = (text: any) => {
    setName(text);
  };

  const handleAddressChange = (text: any) => {
    setAddress(text);
  };

  const handleDobChange = (text: any) => {
    setDateOfBirth(text);
  };

  const handleCountryChange = (text: any) => {
    setCountry(text);
  };

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const onSignOut = () => {
    signOut();
    router.replace("/signin");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.screen, { paddingTop: top }]}>
          <View style={styles.profile_img}></View>
          <Text style={styles.hello}>Hello Traveler</Text>
          <ProfileHook
            label={"Name"}
            placeHolder={"Enter your name"}
            value={name}
            onChangeText={handleNameChange}
            imageSource={"address-card"}
          />
          <ProfileHook
            label={"Address"}
            placeHolder={"Enter your address"}
            value={address}
            onChangeText={handleAddressChange}
            imageSource={"map"}
          />
          <ProfileHook
            label={"DOB"}
            placeHolder={"12/05/1990"}
            value={dateOfBirth}
            onChangeText={handleDobChange}
            imageSource={"calendar"}
          />
          <ProfileHook
            label={"Country"}
            placeHolder={"Pakistan"}
            value={country}
            onChangeText={handleCountryChange}
            imageSource={"globe"}
          />
          <Pressable style={styles.button}>
            <Text style={styles.button_text}>Confirm</Text>
          </Pressable>

          <Pressable
            // title="Log out"
            // color="#255257"
            onPressIn={() => onSignOut()}
          >
            <Text
              style={[
                styles.button_text,
                {
                  color: "#255257",
                  fontSize: 18,
                  lineHeight: 32,
                  fontWeight: "400",
                },
              ]}
            >
              Log out
            </Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 18,
  },

  profile_img: {
    width: 64,
    height: 64,
    backgroundColor: "#000",
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },

  hello: {
    textAlign: "center",
    marginVertical: 24,
    color: "#191919",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 24,
  },

  button_text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 16,
  },
});

export default Profile;
