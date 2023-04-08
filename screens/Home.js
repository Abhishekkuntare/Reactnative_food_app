import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import LottieView from "lottie-react-native";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Artificial Intellegence");

  const getResKey = () => {
    setLoading(true);

    const url = `https://uber-app.onrender.com/api/v1/courses?${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${url}`,
      },
    };
    return fetch(url, apiOptions).then((res) =>
      res.json().then((json) => setRestaurantData(json.courses))
    );
  };
  useEffect(() => {
    getResKey();
  }, [city]);

  return (
    <>
      {loading ? (
        <SafeAreaView
          style={{ marginTop: 40, backgroundColor: "#eee", flex: 1 }}
        >
          <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs navigation={navigation} />
            <SearchBar cityHandler={setCity} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories navigation={navigation} />
            <RestaurantItems
              restaurantData={restaurantData}
              navigation={navigation}
            />
          </ScrollView>
        </SafeAreaView>
      ) : (
        <>
          <View
            style={{
              backgroundColor: "black",
              position: "absolute",
              opacity: 0.6,
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <LottieView
              style={{ height: 200 }}
              source={require("../assets/animations/scanner.json")}
              autoPlay
              speed={3}
            />
          </View>
        </>
      )}
    </>
  );
}
