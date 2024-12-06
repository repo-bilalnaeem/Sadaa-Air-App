import MediaIcons from "@/components/MediaIcons";
import InputHook from "@/hooks/InputHook";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { signIn } = useSignIn();

  const handlePasswordChange = (text: any) => {
    setPassword(text);
  };

  const handleNewPasswordChange = (text: any) => {
    setNewPassword(text);
  };

  const { top } = useSafeAreaInsets();

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const onReset = async () => {
    if (!password || password.trim() === "") {
      Alert.alert("Password cannot be empty.");
      return;
    }

    if (!newPassword || newPassword.trim() === "") {
      Alert.alert("Confirm Password cannot be empty.");
      return;
    }

    if (password !== newPassword) {
      Alert.alert("Passwords do not match.");
      return;
    }
    try {
      await signIn!.resetPassword({
        password,
      });

      router.push("/(authenticated)/(tabs)");
    } catch (err: any) {
      alert(err.errors[0].message);
      console.log(err.errors);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.screen, { paddingTop: top }]}>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.headingPrimary}>Reset Password</Text>
          <Text style={styles.headingSecondary}>
            Enter your new password twice below to reset a new password
          </Text>
          <View style={styles.inputs}>
            <InputHook
              label={"Enter new password"}
              placeHolder={"*******"}
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
            />
            <InputHook
              label={"Re-enter new password"}
              placeHolder={"*******"}
              value={newPassword}
              onChangeText={handleNewPasswordChange}
              secureTextEntry={true}
            />
          </View>

          <Pressable
            style={styles.button}
            onPress={() => router.replace("/(authenticated)/(tabs)")}
          >
            <Text style={styles.button_text}>Reset Password</Text>
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
    marginHorizontal: 26,
  },

  headingPrimary: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 40,
    marginBottom: 12,
  },

  headingSecondary: {
    color: "#555",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 26,
    marginBottom: 48,
  },

  options: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginBottom: 24,
  },

  option_active: {
    color: "#255257",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 26,
  },

  option_inactive: {
    color: "#555",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 26,
  },

  inputs: {
    gap: 14,
    marginBottom: 24,
  },

  button: {
    backgroundColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
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

  checked_icon: {
    width: 30,
    height: 20,
    backgroundColor: "#255257",
    paddingLeft: 3,
  },
  unchecked_icon: {
    width: 30,
    height: 20,
    backgroundColor: "#f6f7f7",
    padding: 0,
  },

  label: {
    color: "#191D23",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 24,
  },

  checkbox_container: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    borderRadius: 5,
    padding: 0,

    overflow: "hidden",
  },

  checkmark: {
    color: "white",
  },

  forget: {
    color: "#255257",
    textAlign: "center",
    marginVertical: 5,
    marginBottom: 24,
  },
});

export default ResetPassword;
