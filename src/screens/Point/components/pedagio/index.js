import React from "react";
import { ScrollView, View, Text, StatusBar } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";
import Stars from "react-native-stars";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Divider from "../../../../components/Divider";

import Style from "./style";
import Colors from "../../../../assets/colors";

// createPoint({
//   tipo: pedagioType,
//   latLog: {
//     longitude: e.nativeEvent.coordinate.longitude,
//     latitude: e.nativeEvent.coordinate.latitude
//   },
//   preco: 5.0,
// })

export default function Parada({ pointData }) {
  return (
    <ScrollView>
      <View style={Style.totalView}>
        <Text>Moto: R$ 5,35</Text>
        <Text style={Style.text}>
          Veículo de passageiro: R${" "}
          {parseFloat(pointData.preco).toFixed(2).replace(".", ",")}
        </Text>

        <Text>Veículo comercial (por eixo): R$ 15,20</Text>
      </View>
    </ScrollView>
  );
}
