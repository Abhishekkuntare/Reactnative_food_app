import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Card() {
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: 220,
            marginLeft: 20,
            height: 200,
          }}
        >
          <Image
            source={require("../../assets/categories/5.jpg")}
            style={{
              width: 120,
              height: 120,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: 220,
              height: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "900",
                fontSize: 18,
              }}
            >
              Beef burger
            </Text>
            <Text
              style={{
                color: "#fd7b94",
                textAlign: "center",
                fontWeight: "600",
                fontSize: 18,
              }}
            >
              $5.99
            </Text>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: 220,
            marginLeft: 20,
            height: 200,
          }}
        >
          <Image
            source={require("../../assets/categories/5.jpg")}
            style={{
              width: 120,
              height: 120,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: 220,
              height: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "900",
                fontSize: 18,
              }}
            >
              Beef burger
            </Text>
            <Text
              style={{
                color: "#fd7b94",
                textAlign: "center",
                fontWeight: "600",
                fontSize: 18,
              }}
            >
              $5.99
            </Text>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: 220,
            marginLeft: 20,
            height: 200,
          }}
        >
          <Image
            source={require("../../assets/categories/5.jpg")}
            style={{
              width: 120,
              height: 120,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: 220,
              height: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "900",
                fontSize: 18,
              }}
            >
              Beef burger
            </Text>
            <Text
              style={{
                color: "#fd7b94",
                textAlign: "center",
                fontWeight: "600",
                fontSize: 18,
              }}
            >
              $5.99
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
