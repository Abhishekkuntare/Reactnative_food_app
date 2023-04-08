import { Image, Text, View } from "react-native";
import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";
import SidebarCard from "./SidebarCard";

export default function HomeSidebar() {
  return (
    <View
      style={{
        marginTop: 10,
        borderTopEndRadius: 180,
        width: "95%",
        height: "100%",
      }}
    >
      <SidebarHeader />
      <SidebarItems />
      <SidebarCard />

      <View
        style={{
          marginTop: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../assets/icons/6.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Logout </Text>
      </View>
    </View>
  );
}
