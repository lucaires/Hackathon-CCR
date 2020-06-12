import "react-native-gesture-handler";
import React from "react";
import { AppLoading } from "expo";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

import App from "./src/index";

export default function Main() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <App />;
}
