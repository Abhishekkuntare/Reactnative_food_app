import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MainHeader from "../components/Main/MainHeader/MainHeader";

const Main = ({ navigation }) => {
  return (
    <View style={{ marginTop: 50 }}>
      <MainHeader />
    </View>
  );
};

export default Main;
