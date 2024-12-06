import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  StatusBar,
  Button,
} from "react-native";
import React, { useRef, useState } from "react";
import InputHook from "@/hooks/InputHook";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import Continue from "@/components/Continue";
import MediaIcons from "@/components/MediaIcons";
import { useSignUp } from "@clerk/clerk-expo";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoaded, signUp } = useSignUp();
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (text: any) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: any) => {
    setPassword(text);
  };

  const handleNameChange = (text: any) => {
    setName(text);
  };

  const { top } = useSafeAreaInsets();

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const user = await signUp.create({
        firstName: name,
        emailAddress: email,
        password,
      });
    } catch (err: any) {
      console.log(err.errors);
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.screen, { paddingTop: top }]}>
          <Text style={styles.headingPrimary}>Create an Account</Text>
          <Text style={styles.headingSecondary}>Sign up for your account</Text>

          <View style={styles.inputs}>
            <InputHook
              label={"Name"}
              placeHolder={"John Doe"}
              value={name}
              onChangeText={handleNameChange}
              secureTextEntry={false}
            />
            <InputHook
              label={"Email Address"}
              placeHolder={"hello@example.com"}
              value={email}
              onChangeText={handleEmailChange}
              secureTextEntry={false}
            />
            <InputHook
              label={"Password"}
              placeHolder={"******"}
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
            />
          </View>

          <Text style={styles.sub_text}>
            By continuing, you agree to our{" "}
            <Text
              style={{
                color: "#255257",
                fontSize: 13,
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              terms of service.
            </Text>
          </Text>

          <Pressable style={styles.button} onPressIn={() => onSignUpPress()}>
            <Text style={styles.button_text}>Sign up</Text>
          </Pressable>

          <Continue>Or Continue</Continue>

          <MediaIcons />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.have_account}>Already have an account? </Text>
            <Pressable onPress={() => router.replace("/")}>
              <Text style={styles.sign_in}>Sign in here</Text>
            </Pressable>
          </View>
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

  inputs: {
    gap: 14,
    marginBottom: 24,
  },

  sub_text: {
    color: "#4B5768",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 20,
    fontStyle: "normal",
    marginBottom: 16,
  },

  have_account: {
    color: "#999DA3",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
  },

  sign_in: {
    color: "#255257",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 24,
  },
});

export default SignUp;
