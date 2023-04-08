import { ScrollView, View } from "react-native";
import React from "react";
import SearchBar from "../components/Grocery/SearchBar";
import Categories from "../components/Grocery/Categories";
import Banner from "../components/Grocery/Banner";
import Card from "../components/Grocery/Card";
import img1 from "../assets/categories/5.jpg";
import HomeTitle from "../components/Grocery/HomeTitle";
import HeaderTabs from "../components/home/HeaderTabs";

export default function Grocery({ navigation }) {
  return (
    <View style={{ marginTop: 40, flex: 1 }}>
      <HeaderTabs navigation={navigation} />
      <SearchBar />
      <ScrollView>
        <Categories />
        <Banner navigation={navigation} name={"Rockstar Pizza "} />
        <HomeTitle />
        <Card img={img1} name="Milk" price="$5.99" />
      </ScrollView>
    </View>
  );
}
