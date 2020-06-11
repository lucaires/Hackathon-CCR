import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Load from "./screens/Load";
import Map from "./screens/Map";
import {
  FontAwesome,
  Octicons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Load: {
    lib: Feather,
    name: "truck",
  },
  Map: {
    lib: FontAwesome,
    name: "map-o",
  },
  Notification: {
    lib: MaterialIcons,
    name: "notifications-none",
  },
  Settings: {
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
      <Tab.Screen name="Load" component={Load} options={{ title: "Cargas" }} />
      <Tab.Screen name="Map" component={Map} options={{ title: "Mapa" }} />
      <Tab.Screen
        name="Notification"
        component={Map}
        options={{ title: "Notificações" }}
      />
      <Tab.Screen
        name="Settings"
        component={Map}
        options={{ title: "Ajustes" }}
      />
    </Tab.Navigator>
  );
}
