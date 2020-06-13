import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from "../screens/SingIn"
import Start from "../screens/Start"
import SingUp from "../screens/SingUp"
import Main from "../screens/Main"

const Stack = createStackNavigator()
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
        // options={{ title: "", headerTransparent: true }}
        />
        <Stack.Screen
          name="Start"
          component={Start}
        // options={{ header: () => { } }}
        />
        <Stack.Screen
          name="SignIn"
          component={SingIn}
        // options={{ header: () => { } }}
        />
        <Stack.Screen
          name="SignUp"
          component={SingUp}
        // options={{ title: "", headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}