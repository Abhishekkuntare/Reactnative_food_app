import { View, TextInput } from "react-native";
import React from "react";

export default function SearchBar() {
  return (
    <View style={{ margin: 20 }}>
      <TextInput
        placeholder="Search for your taste.."
        style={{
          backgroundColor: "#F1F1F6",
          color: "black",
          height: 50,
          borderRadius: 10,
          paddingLeft: 10,
        }}
      />
    </View>
  );
}
