import { View, Text, Image } from "react-native";
import React from "react";

export default function ProductPageHeader() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: 40, height: 40, marginLeft: 20 }}
        source={require("../../assets/icons/8.png")}
      />
      <Image
        style={{ width: 40, height: 40, marginRight: 20 }}
        source={require("../../assets/icons/9.png")}
      />
    </View>
  );
}
