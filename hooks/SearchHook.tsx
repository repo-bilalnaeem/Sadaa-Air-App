import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

type Props = {
  label: string;
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;
  imageSource: any;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  disable?: any;
};

const SearchHook = ({
  label,
  placeHolder,
  value,
  onChangeText,
  imageSource,
  keyboardType,
  autoCapitalize,
  disable,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.lightLabelTag}>{label}</Text>
      <View style={styles.passwordContainer}>
        <FontAwesome5
          name={imageSource}
          size={16}
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

            imageSource ? { paddingLeft: 55 } : null,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    flexGrow: 1,
  },
  lightLabelTag: {
    fontSize: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    zIndex: 1,
    position: "absolute",
    top: -10,
    left: 20,
    color: "#3B3939",
  },

  passwordContainer: {
    position: "relative",
  },
  lightTextInput: {
    borderRadius: 17,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    height: 50,
    backgroundColor: "transparent",
    color: "#000",
    paddingLeft:"15%"
  },

  image: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 18,
    left: 20,
    tintColor: "#AEAEAE",
  },
});
export default SearchHook;
