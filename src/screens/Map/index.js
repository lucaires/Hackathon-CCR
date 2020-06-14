import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

import { createPoint, pedagioType, stopPointType, turnOffPointsRef, getPoints } from '../../services/api/points';
import pointsArray from '../../services/api/pointsArray';
import { database } from "firebase"
import { SvgUri } from "react-native-svg";

import styles from "./style"

export default function Map() {
  const [region, setRegion] = React.useState({
    latitude: -14.235004,
    longitude: -51.92528,
    latitudeDelta: 50,
    longitudeDelta: 50,
  })

  const [points, setPoints] = React.useState([])

  React.useEffect(() => {
    getPoints((data) => setPoints(data))
  }, [])

  function getUserLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        })
      },
      error =>
        Alert.alert(
          'Erro na localização',
          'Não foi possível encontrar sua localização atual.'),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  function onMapPress(e) {
    // getPoints((data)=>setPoints(data))
    // createPoint({
    //   tipo: pedagioType,
    //   latLog: {
    //     longitude: e.nativeEvent.coordinate.longitude,
    //     latitude: e.nativeEvent.coordinate.latitude
    //   },
    //   preco: 5.0,
    // })
    // createPoint({
    //   tipo: stopPointType,
    //   latLog: {
    //     longitude: e.nativeEvent.coordinate.longitude-10,
    //     latitude: e.nativeEvent.coordinate.latitude-10
    //   },
    //   medico: {
    //     pago: false
    //   },
    //   avaliacao: 2,
    //   conbustivel: {
    //     preco: 2
    //   },
    //   food: {
    //     lanchonete: true,
    //     cafe_manha: false,
    //     almoco: true,
    //     janta: true
    //   },
    //   sanitario: {
    //     preco: 0,
    //     avaliacao: 3
    //   },
    //   chuveiro: {
    //     preco: 10,
    //     avaliacao: 5
    //   },
    //   per_noite: {
    //     preco: 10,
    //     avaliacao: 2,
    //   },
    //   borracaria: false,
    //   mecanico: false,
    //   seguranca: 2
    // })
    // console.log(e.nativeEvent.coordinate)
  }
  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          region={region}
          onRegionChangeComplete={setRegion}
          onPress={onMapPress}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {points.map(point => (
            <Marker
              onPress={() => {
                console.log(point)
              }}
              coordinate={point.latLog}
            >
              {/* <SvgUri
                width={42}
                height={42}
                uri={"https://image.flaticon.com/icons/svg/2962/2962901.svg"}
              /> */}
            </Marker>
          ))}
        </MapView>
      </View>
    </>
  );
}
