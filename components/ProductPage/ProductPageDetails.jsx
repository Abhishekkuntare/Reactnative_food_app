import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function ProductPageDetails() {
  const [color, setColor] = useState(false);
  const [count, setCount] = useState(0);
  const toggleNegative = () => {
    setColor(!color);
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const togglePositive = () => {
    setColor(!color);
    setCount(count + 1);
  };
  const total = 59.99 * count * 10;

  return (
    <View style={{ marginLeft: 20, marginTop: 10 }}>
      <Text style={{ color: "black", fontSize: 25, fontWeight: "700" }}>
        Beef Pizzaa is here
      </Text>
      <Text style={{ color: "#fc738e", fontSize: 30, fontWeight: "600" }}>
        ${total}
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => toggleNegative()}
          style={{
            borderColor: "#eee",
            borderWidth: 1,
            width: 45,
            height: 45,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: color ? "#fc738e" : "white",
            backgroundColor: color,
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "400" }}>
            --
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderColor: "#eee",
            borderWidth: 1,
            width: 45,
            height: 45,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fc738e",
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "400" }}>
            {count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => togglePositive()}
          style={{
            borderColor: "#eee",
            borderWidth: 1,
            width: 45,
            height: 45,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color,
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "400" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
