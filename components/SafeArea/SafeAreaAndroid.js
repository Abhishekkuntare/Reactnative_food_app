import { View, SafeAreaView } from "react-native";
import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "react-native";

export default function SafeAreaAndroid({ Component, ...rest }) {
  return (
    <View
      style={{
        padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Component {...rest} />
      </SafeAreaView>
    </View>
  );
}
