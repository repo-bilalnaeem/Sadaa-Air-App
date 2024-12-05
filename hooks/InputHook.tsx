import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  useColorScheme,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;

  secureTextEntry: boolean;
  // imageSource: any;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

const InputHook = ({
  label,
  placeHolder,
  secureTextEntry,
  onChangeText,

  value,
  // imageSource,
  keyboardType,
  autoCapitalize,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          placeholder={placeHolder}
          value={value}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor="gray"
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={[styles.input]}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <MaterialIcons
              name={showPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#8E8E8E"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputHook;

const styles = StyleSheet.create({
  label: {
    color: "#191D23",
    textOverflow: "ellipsis",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    marginBottom: 8,
  },

  input: {
    borderRadius: 8,
    borderColor: "#D0D5DD",
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },

  eyeIcon: {
    position: "absolute",
    top: 18,
    right: 20,
  },
  image: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 20,
    left: 24,
    tintColor: "#AEAEAE",
  },
});
