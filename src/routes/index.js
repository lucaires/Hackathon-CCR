import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../assets/colors";

import SingIn from "../screens/SingIn";
import Start from "../screens/Start";
import SingUp from "../screens/SingUp";
import Main from "../screens/Main";

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.blue },
          headerTintColor: Colors.white,
        }}
      >
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ header: () => {} }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ header: () => {} }}
        />
        <Stack.Screen
          name="SingIn"
          component={SingIn}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{ title: "Criar conta" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
