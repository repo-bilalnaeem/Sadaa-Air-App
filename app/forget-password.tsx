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
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);

  const { signIn } = useSignIn();

  const handleEmailChange = (text: any) => {
    setEmail(text);
  };

  const { top } = useSafeAreaInsets();

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const onRequestReset = async () => {
    try {
      const response = await signIn!.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      setSuccessfulCreation(true);
      console.log(response);
      router.navigate({ pathname: "/otp-verification", params: { email } });
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.screen, { paddingTop: top }]}>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.headingPrimary}>Forget Password?</Text>
          <Text style={styles.headingSecondary}>
            Enter your email address to get the password reset link
          </Text>
          <View style={styles.inputs}>
            <InputHook
              label={"Email"}
              placeHolder={"hello@exmaple.com"}
              value={email}
              onChangeText={handleEmailChange}
              secureTextEntry={false}
            />
          </View>

          <Pressable style={styles.button} onPress={() => onRequestReset()}>
            <Text style={styles.button_text}>Password Reset</Text>
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

export default ForgetPassword;
