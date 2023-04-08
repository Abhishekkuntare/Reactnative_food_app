import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function SidebarItems() {
  const [color, setColor] = useState("black");
  const handleColor = () => (color ? setColor("red") : setColor("black"));
  const handleColor1 = () => (color ? setColor("red") : setColor("black"));

  return (
    <View
      style={{
        margin: 40,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          handleColor1();
        }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 30,
        }}
      >
        <Image
          style={{ marginRight: 10, width: 25, height: 25 }}
          source={require("../../../assets/icons/3.png")}
        />
        <Text style={{ fontSize: 18, fontWeight: "300" }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleColor();
        }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 30,
        }}
      >
        <Image
          style={{ marginRight: 10, width: 20, height: 20 }}
          source={require("../../../assets/icons/4.png")}
        />
        <Text style={{ fontSize: 18, fontWeight: "300" }}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleColor();
        }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 30,
        }}
      >
        <Image
          style={{ marginRight: 10, width: 25, height: 25 }}
          source={require("../../../assets/icons/1.png")}
        />
        <Text style={{ fontSize: 18, fontWeight: "300" }}>Coupons codes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
        onPress={() => {
          handleColor();
        }}
      >
        <Image
          style={{ marginRight: 10, width: 25, height: 25 }}
          source={require("../../../assets/icons/3.png")}
        />
        <Text style={{ fontSize: 18, fontWeight: "300", color: color }}>
          Notification
        </Text>
      </TouchableOpacity>
    </View>
  );
}
