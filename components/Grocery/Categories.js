import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const items = [
  {
    image: require("../../assets/categories/11.jpg"),
    text: "Cremy Donutes",
  },

  {
    image: require("../../assets/categories/3.jpg"),
    text: "Fresh  Eggs",
  },
  {
    image: require("../../assets/categories/4.jpg"),
    text: "Tug Burgers",
  },
  {
    image: require("../../assets/categories/5.jpg"),
    text: "Coffee & Milk",
  },
  {
    image: require("../../assets/categories/6.jpg"),
    text: "Nervce Sandwitch",
  },
  {
    image: require("../../assets/categories/7.jpg"),
    text: "Smilely Cookies",
  },
  {
    image: require("../../assets/categories/8.jpg"),
    text: "Ice Cream Cup",
  },
  {
    image: require("../../assets/categories/9.jpg"),
    text: "Honey Cookie",
  },
  {
    image: require("../../assets/categories/10.jpg"),
    text: "Rokstar Pizza",
  },
  {
    image: require("../../assets/categories/1.jpg"),
    text: "Hurt Donute",
  },
  {
    image: require("../../assets/categories/12.jpg"),
    text: "Sweet IceCream",
  },
  {
    image: require("../../assets/categories/13.jpg"),
    text: "Shafe Pizza",
  },
  {
    image: require("../../assets/categories/14.jpg"),
    text: "Smile Cheeze",
  },
  {
    image: require("../../assets/categories/15.jpg"),
    text: "Lovely Popcon",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <TouchableOpacity>
              <Image
                source={item.image}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                  borderRadius: 100,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  textAlign: "center",
                  marginTop: 4,
                }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
