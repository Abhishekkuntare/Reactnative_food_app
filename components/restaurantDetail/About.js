import React from "react";
import { View, Text, Image } from "react-native";

const api = {
  poster: {
    public_id: "zjwuaqmoaffxbebnbsjz",
    url: "http://res.cloudinary.com/apk-com/image/upload/v1674452433/zjwuaqmoaffxbebnbsjz.webp",
  },
  title: "Ai based mobile",
  description: "this is the basic ai based mobile ",
  views: 7,
  noOfVideos: 0,
  category: [
    { title: "indian" },
    { title: "russian" },
    { title: "iceCream" },
    { title: "Burger" },
  ],
  createdBy: "apk",
  createdAt: "2023-01-23T05:40:33.482Z",
};

export default function About(props) {
  const { poster, title, category, views, createdAt, createdBy } =
    props.route.params;

  const description = `${category ? " • " + views : ""} • 🎫 • ${title} ⭐ `;
  return (
    <View>
      <RestaurantImage image={poster.url} />
      <RestaurantName title={title} />
      <RestaurantDescription
        createdBy={createdBy}
        description={description}
        createdAt={createdAt}
        category={category}
      />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <>
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {props.description}
      {props.createdAt}
      {props.category}
    </Text>
    <Text style={{ marginHorizontal: 19, fontWeight: "400", fontSize: 18 }}>
      Price: {props.createdBy}
    </Text>
  </>
);
