import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import Main from "./screens/Main";
import Grocery from "./screens/Grocery";
import ProductPage from "./screens/ProductPage";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Grocery"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          <Stack.Screen name="Grocery" component={Grocery} />
          <Stack.Screen name="ProductPage" component={ProductPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
