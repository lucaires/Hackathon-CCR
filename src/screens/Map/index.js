import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

import {database} from 'firebase';

import styles from "./style"

export default function Map() {
  const [region, setRegion] = React.useState({
    latitude: -14.235004,
    longitude: -51.92528,
    latitudeDelta: 50,
    longitudeDelta: 50,
  })
  const [stopPoints, setStopPoints] = React.useState([])
  React.useEffect(() => {
    database().ref('teste').set("deu certo")
    getUserLocation()
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
    console.log(e.nativeEvent.coordinate)
  }
  function StopPoints(){
    return stopPoints.map(
      <Marker

      />
    )
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
          {/* <StopPoints /> */}
        </MapView>
      </View>
    </>
  );
}
