import { View, Text, Image } from "react-native";
import React from "react";

const ProductSize = (props) => (
  <View
    style={{
      borderColor: "#eee",
      borderWidth: 1,
      width: 35,
      height: 35,
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
      {props.item}
    </Text>
  </View>
);

export default function ProductPageImage() {
  return (
    <>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 300,
            height: 300,
            marginTop: 20,
            borderBottomRightRadius: 100,
            borderTopLeftRadius: 100,
          }}
          source={require("../../assets/categories/10.jpg")}
        />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <ProductSize item="S" />
        <ProductSize item="M" />
        <ProductSize item="L" />
      </View>
    </>
  );
}
