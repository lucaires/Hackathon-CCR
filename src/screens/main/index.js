import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Home";
import Filters from "../Filters";
import Map from "../Map";
import { FontAwesome, Octicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Map: {
    lib: FontAwesome,
    name: "map-o",
  },
  Filter: {
    lib: Octicons,
    name: "settings",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "Inicio" }} />
      <Tab.Screen name="Map" component={Map} options={{ title: "Mapa" }} />
      <Tab.Screen
        name="Filter"
        component={Filters}
        options={{ title: "Filtros" }}
      />
    </Tab.Navigator>
  );
}
