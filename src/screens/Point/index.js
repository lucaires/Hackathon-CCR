import React from 'react'
import { ImageBackground, View, Text, StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from "react-native-paper"
import { getPoint, pedagioType, stopPointType, medicalType, packageType } from '../../services/api/points';

import Parada from "./components/parada"
import Pedagio from "./components/pedagio"
import Saude from "./components/saude"
import Pacote from "./components/pacote"

import style from "./style"
import Colors from '../../assets/colors';

export default function Point() {
  const Navigation = useNavigation()
  const Route = useRoute()

  React.useEffect(() => {
    console.log(Route.params.tipo)
    console.log("se fuder")
    // console.log(point)
    switch (Route.params.tipo) {
      case pedagioType:
        Navigation.setOptions({ title: "Pedágio" })
        break;
      case stopPointType:
        Navigation.setOptions({ title: "Ponto de Parada" })
        break;
      case medicalType:
        Navigation.setOptions({ title: "Multirão Médico" })
        break;
      case packageType:
        Navigation.setOptions({ title: "Oferta de carga" })
        break;
    }
  }, [])
  switch (Route.params.tipo) {
    case pedagioType:
      return <Pedagio pointData={Route.params} />
    case stopPointType:
      return <Parada pointData={Route.params} />
    case medicalType:
      return <Saude pointData={Route.params} />
    case packageType:
      return <Pacote pointData={Route.params} />
  }
}
