import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    poster: {
      public_id: "zjwuaqmoaffxbebnbsjz",
      url: "http://res.cloudinary.com/apk-com/image/upload/v1674452433/zjwuaqmoaffxbebnbsjz.webp",
    },
    _id: "63ce1dd1dd82053783570242",
    title: "Ai based mobile",
    description: "this is the basic ai based mobile ",
    views: 7,
    noOfVideos: 0,
    category: "Artificial Intellegence",
    createdBy: "apk",
    createdAt: "2023-01-23T05:40:33.482Z",
  },
  {
    poster: {
      public_id: "zjwuaqmoaffxbebnbsjz",
      url: "http://res.cloudinary.com/apk-com/image/upload/v1674452433/zjwuaqmoaffxbebnbsjz.webp",
    },
    _id: "63ce1dd1dd82053783570242",
    title: "Ai based mobile",
    description: "this is the basic ai based mobile ",
    views: 7,
    noOfVideos: 0,
    category: "Artificial Intellegence",
    createdBy: "apk",
    createdAt: "2023-01-23T05:40:33.482Z",
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              title: item.title,
              description: item.description,
              poster: item.poster,
              category: item.category,
              createdBy: item.createdBy,
              views: item.views,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={item.poster.url} />
            <RestaurantInfo
              category={item.category}
              name={item.title}
              views={item.views}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      borderRadius={5}
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.category}</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.views}</Text>
    </View>
  </View>
);
