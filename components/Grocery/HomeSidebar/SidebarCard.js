import { View, Text, Image } from "react-native";
import React from "react";

export default function SidebarCard() {
  return (
    <View
      style={{
        backgroundColor: "#34bfe6",
        width: 320,
        margin: 20,
        height: 200,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <View>
          <Text
            style={{
              color: "yellow",
              fontWeight: "300",
              fontSize: 28,
              width: 130,
            }}
          >
            Free
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 20,
              width: 130,
            }}
          >
            Delivery on all burgers
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 15,
              marginTop: 20,
            }}
            source={require("../../../assets/icons/7.jpg")}
          />
        </View>
      </View>
      <Image
        style={{
          position: "absolute",
          bottom: -30,
          marginLeft: 10,
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
        source={require("../../../assets/icons/6.jpg")}
      />
    </View>
  );
}
