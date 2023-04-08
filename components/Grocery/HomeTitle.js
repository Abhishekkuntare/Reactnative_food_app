import { View, Text } from "react-native";
import React from "react";

export default function HomeTitle() {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 18,
          fontWeight: "800",
        }}
      >
        Most Popular Today
      </Text>
      <Text
        style={{
          fontWeight: "900",
          color: "red",
          fontSize: 13,
        }}
      >
        View all
      </Text>
    </View>
  );
}
