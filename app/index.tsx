import MediaIcons from "@/components/MediaIcons";
import InputHook from "@/hooks/InputHook";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  View,
  Pressable,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CheckBox } from "react-native-elements";
import Continue from "@/components/Continue";
import { router } from "expo-router";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const handleEmailChange = (text: any) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: any) => {
    setPassword(text);
  };

  const handleCheckBoxChange = () => {
    setSelection(!isSelected);
  };

  const { top } = useSafeAreaInsets();

  const handlePress = () => {
    Keyboard.dismiss();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.screen, { paddingTop: top }]}>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.headingPrimary}>Login</Text>
          <Text style={styles.headingSecondary}>Welcome back to the app</Text>

          <View style={styles.options}>
            <TouchableOpacity>
              <Text style={styles.option_active}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.option_inactive}>Phone Number</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputs}>
            <View>
              <InputHook
                label={"Email"}
                placeHolder={"hello@exmaple.com"}
                value={email}
                onChangeText={handleEmailChange}
                secureTextEntry={false}
              />
            </View>

            <View>
              <InputHook
                label={"Password"}
                placeHolder={"password"}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={styles.checkbox_container}>
            <CheckBox
              checked={isSelected}
              onPress={handleCheckBoxChange}
              checkedColor="rgba(37, 82, 87, 1)"
              uncheckedColor={"grey"}
              checkedIcon={
                <View style={styles.checked_icon}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
              }
              uncheckedIcon={<View style={styles.unchecked_icon} />}
              containerStyle={styles.checkbox}
            />
            <Text style={styles.label}>Remember me</Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => router.replace("/(tabs)")}
          >
            <Text style={styles.button_text}>Login</Text>
          </Pressable>
          <Continue>Or Sign up with</Continue>

          <MediaIcons />

          <Button
            title="Create an account"
            color="#255257"
            onPress={() => router.push("/signup")}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

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
});
