import React from "react";

import { View, Pressable, Image, StyleSheet, Text } from "react-native";

const MediaIcons = () => {
  return (
    <Pressable style={styles.button}>
      <Image
        style={{ width: 28, height: 28 }}
        source={require("@/assets/images/Google-Icon.png")}
      />
      <Text style={styles.text}>Continue with google</Text>
    </Pressable>
  );
};

export default MediaIcons;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: "#E4E7EB",
    marginVertical: 24,
    paddingVertical: 12,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 24,
    justifyContent: "center",
  },

  text: {
    color: "#4B5768",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
  },
});
