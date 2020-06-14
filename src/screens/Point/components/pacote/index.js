import React from 'react'
import { ScrollView, View, Text, StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from "react-native-paper"
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Stars from 'react-native-stars';
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Divider from "../../../../components/Divider"

import Style from "./style"
import Colors from '../../../../assets/colors';
// createPoint({
//   tipo: packageType,
//   valor: 500,
//   quantidade: 2000,
//   contratante: "Seu Zé",
//   destino: {
//     longitude: e.nativeEvent.coordinate.longitude,
//     latitude: e.nativeEvent.coordinate.latitude
//   },
//   latLog: {
//     longitude: e.nativeEvent.coordinate.longitude,
//     latitude: e.nativeEvent.coordinate.latitude
//   },
// })
export default function Parada({ pointData }) {
  return (
    <ScrollView>
      <View style={Style.totalView}>
        <Text style={Style.name}>Oferta de Trasporte</Text>
      </View>
      <Text style={Style.title}>Serviços</Text>
      <View style={Style.totalView}>
        <Text style={Style.text}><Feather name={'package'} size={30} />  Quantidade: {parseFloat(pointData.quantidade).toFixed(2).replace(".", ",")} Kg</Text>
        <Text style={Style.text}><MaterialIcons name={'attach-money'} size={30} />  Preço a ser pago: R$ {parseFloat(pointData.valor).toFixed(2).replace(".", ",")}</Text>
        <Text style={Style.text}><FontAwesome5 name={'user'} size={30} />  contratante: {pointData.contratante}</Text>
      </View>
      <Text style={Style.title}>Destino</Text>
      <View style={Style.container}>
        <MapView
          style={Style.mapStyle}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: pointData.destino.latitude,
            latitudeDelta: 0.061393467620753484,
            longitude: pointData.destino.longitude,
            longitudeDelta: 0.0451606884598732,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          <Marker
            coordinate={pointData.destino}
          />
        </MapView>
      </View>
    </ScrollView>
  )
}
