import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Filter() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Infraestrutura</Text>
      <View style={styles.filterInfra}>
        <Icon
          raised
          name="shower"
          type="font-awesome"
          size={30}
          color="#218080"
          onPress={() => {
            console.log("hello");
          }}
        />

        <Icon
          raised
          name="bed"
          type="font-awesome"
          size={30}
          color="#218080"
          onPress={() => {
            console.log("hello");
          }}
        />
        <Icon
          raised
          name="toilet-paper"
          type="font-awesome"
          size={30}
          color="#218080"
          onPress={() => console.log("hello")}
        />
        <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          size={30}
          color="#218080"
          onPress={() => console.log("hello")}
        />
      </View>
    </SafeAreaView>
  );
}
