import { View, Text, Image } from "react-native";
import React from "react";

export default function SidebarHeader() {
  return (
    <>
      <View>
        <Image
          style={{
            alignSelf: "center",
            width: 100,
            height: 100,
            borderRadius: 100,
            marginTop: 5,
          }}
          source={require("../../../assets/categories/10.jpg")}
        />
        <Text
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "600",
            fontSize: 24,
          }}
        >
          Abhishek Kuntare
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "gray",
            fontWeight: "300",
            fontSize: 15,
          }}
        >
          abhishekkuntare@gmail.com
        </Text>
      </View>
    </>
  );
}
