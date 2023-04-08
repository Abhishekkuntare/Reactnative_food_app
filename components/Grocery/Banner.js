import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";

export default function Banner(props) {
  return (
    <View
      style={{
        backgroundColor: "#fc738e",
        height: 230,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <View
        style={{
          marginLeft: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "yellow",
            fontWeight: "900",
            fontSize: 28,
            width: 130,
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            textAlign: "center",
            lineHeight: 22,
            color: "white",
            fontSize: 12,
            width: 130,
          }}
        >
          Delicious Rockstar pizza ready for the delivery
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: "white",
            fontWeight: "300",
            fontSize: 22,
          }}
        >
          49% OFF
        </Text>
      </View>
      <Image
        style={{ width: 180, height: 180, borderRadius: 10 }}
        source={require("../../assets/categories/b.jpg")}
      />
    </View>
  );
}
