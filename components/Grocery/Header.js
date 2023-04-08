import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HomeSidebar from "./HomeSidebar/HomeSidebar";

export default function Header() {
  const [openSide, setOpenSide] = useState(false);

  const handleChange = () => {
    openSide ? setOpenSide(false) : setOpenSide(true);
  };

  return (
    <>
      <View
        style={{
          paddingTop: 50,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => handleChange()}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100, marginLeft: 10 }}
            source={require("../../assets/h.jpg")}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "500",
            fontSize: 18,
            marginRight: 10,
          }}
        >
          Hello,Abhishek
        </Text>
      </View>
      {openSide && (
        <HomeSidebar openSide={openSide} setOpenSide={setOpenSide} />
      )}
    </>
  );
}
