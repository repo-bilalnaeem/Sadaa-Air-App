import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

type Props = {
  label: string;
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;
  imageSource: any;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

const ProfileHook = ({
  label,
  placeHolder,
  value,
  onChangeText,
  imageSource,
  keyboardType,
  autoCapitalize,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.lightLabelTag}>{label}</Text>
      <View style={styles.passwordContainer}>
        <FontAwesome6
          name={imageSource}
          size={20}
          color={"#636363"}
          style={styles.image}
        />
        <TextInput
          placeholder={placeHolder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="gray"
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={[
            styles.lightTextInput,

            imageSource ? { paddingLeft: 60 } : null,
          ]}
        />
      </View>
    </View>
  );
};

export default ProfileHook;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  lightLabelTag: {
    fontSize: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    zIndex: 1,
    position: "absolute",
    top: -10,
    left: 30,
    color: "#3B3939",
  },
  darkLabelTag: {
    fontSize: 15,
    backgroundColor: "#1E1F22",
    paddingHorizontal: 5,
    zIndex: 1,
    position: "absolute",
    top: -10,
    left: 30,
    color: "#9A9A9A",
  },
  passwordContainer: {
    position: "relative",
  },
  darkTextInput: {
    borderRadius: 17,
    borderWidth: 1.5,
    borderColor: "#CCC",
    height: 60,
    paddingHorizontal: 26,
  },
  lightTextInput: {
    borderRadius: 17,
    borderWidth: 1.5,
    borderColor: "#CCC",
    height: 60,
    paddingHorizontal: 26,
    backgroundColor: "transparent",
    color: "#000",
  },

  eyeIcon: {
    position: "absolute",
    top: 18,
    right: 20,
  },
  image: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 20,
    left: 24,
    tintColor: "#AEAEAE",
  },
});
