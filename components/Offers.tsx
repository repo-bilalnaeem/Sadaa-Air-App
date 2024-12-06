import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hot Offer</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.offer}>
          <View style={styles.background}>
            <Image
              source={require("@/assets/images/mastercard_logo.png")}
              style={styles.image}
            />
            <Text style={styles.percentage}>15% OFF</Text>
          </View>
          <View
            style={{
              paddingVertical: 18,
            }}
          >
            <Text style={styles.heading_primary}>
              15% Discount{"\n"}with Mastercard
            </Text>
            <Text style={styles.heading_secondary} lineBreakMode="clip">
              Lorem ipsum dolor{"\n"}sit am etet adip
            </Text>
          </View>
        </View>
        <View style={styles.offer}>
          <View style={styles.background}>
            <Image
              source={require("@/assets/images/visa_logo.png")}
              style={[styles.image, { height: 40 }]}
            />
            <Text style={styles.percentage}>23% OFF</Text>
          </View>
          <View
            style={{
              paddingVertical: 18,
            }}
          >
            <Text style={styles.heading_primary}>
              23% Discount{"\n"}with Visa
            </Text>
            <Text style={styles.heading_secondary} lineBreakMode="clip">
              Lorem ipsum dolor{"\n"}sit am etet adip
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#191919",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 24,
    marginBottom: 12,
    marginHorizontal: 16,
  },

  background: {
    paddingHorizontal: 12,
    paddingVertical: 22,
    backgroundColor: "#C3D7D9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  container: {
    marginVertical: 20,
    borderRadius: 8,
  },

  percentage: {
    color: "#333",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 22,
  },

  offer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },

  heading_primary: {
    color: "#191919",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    marginBottom: 12,
  },

  heading_secondary: {
    color: "#999",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 18,
  },

  image: {
    resizeMode: "contain",
    width: 100,
    height: 70,
  },
});

export default Offers;
