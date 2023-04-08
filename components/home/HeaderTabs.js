import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs({ navigation }) {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View
      style={{ flexDirection: "row", alignSelf: "center", display: "flex" }}
    >
      {/* header buttons */}
      <HeaderButton
        navigation={navigation}
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        navigation={navigation}
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => {
      props.setActiveTab(props.text);
      props.navigation.navigate("Home");
    }}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
