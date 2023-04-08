import { View } from "react-native";
import React from "react";
import ProductPageHeader from "../components/ProductPage/ProductPageHeader";
import ProductPageImage from "../components/ProductPage/ProductPageImage";
import ProductPageDetails from "../components/ProductPage/ProductPageDetails";
import ProductPageDivider from "../components/ProductPage/ProductPageDivider";

export default function ProductPage() {
  return (
    <View style={{ paddingTop: 50 }}>
      <ProductPageHeader />
      <ProductPageImage />
      <ProductPageDetails />
      <ProductPageDivider />
    </View>
  );
}
