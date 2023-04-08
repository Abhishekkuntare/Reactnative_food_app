import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function ProductPageDivider() {
  const [state, setState] = useState(true);
  const toggle = () => {};

  return (
    <View
      style={{
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={() => toggle()}>
        <Text
          style={{
            textAlign: "center",
            borderBottomColor: state ? "red" : "white",
            borderBottomWidth: 2,
            width: 100,
            paddingBottom: 5,
          }}
        >
          Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            borderBottomColor: state ? "red" : "white",
            borderBottomWidth: 2,
            paddingBottom: 5,
            width: 200,
          }}
        >
          Integrents
        </Text>
      </TouchableOpacity>
    </View>
  );
}
