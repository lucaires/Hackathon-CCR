import React from 'react'
import { ScrollView, View, Text, StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from "react-native-paper"
import Stars from 'react-native-stars';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "../../../../components/Divider"

import Style from "./style"
import Colors from '../../../../assets/colors';

// createPoint({
//   tipo: medicalType,
//   name: "Atendimento médico COVID19",
//   description: "Atendimento médico para caminhoneiros para combater o avanço da doença.",
//   latLog: {
//     longitude: e.nativeEvent.coordinate.longitude,
//     latitude: e.nativeEvent.coordinate.latitude
//   },
// })
export default function Parada({ pointData }) {
  return (
    <ScrollView>
      <View style={Style.totalView}>
        <Text style={Style.name}>{pointData.name}</Text>
      </View>
      <Text style={Style.title}>Descrição</Text>
      <View style={Style.totalView}>
        <Text style={Style.text}>{pointData.description}</Text>
      </View>
    </ScrollView >
  )
}
