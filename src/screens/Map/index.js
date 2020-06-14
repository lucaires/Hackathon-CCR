import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";

import {
  createPoint,
  turnOffPointsRef,
  getPoints,
  pedagioType,
  stopPointType,
  medicalType,
  packageType,
} from "../../services/api/points";
import pointsArray from "../../services/api/pointsArray";
import { database } from "firebase";
import { SvgUri } from "react-native-svg";

import styles from "./style";

export default function Map() {
  const Navigation = useNavigation();
  const [region, setRegion] = React.useState({
    latitude: -14.235004,
    longitude: -51.92528,
    latitudeDelta: 50,
    longitudeDelta: 50,
  });

  const [points, setPoints] = React.useState([]);

  React.useEffect(() => {
    getPoints((data) => setPoints(data));
  }, []);

  function getUserLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setRegion({
          latitude: -23.419229990400986,
          latitudeDelta: 0.061393467620753484,
          longitude: -46.393510680645704,
          longitudeDelta: 0.0451606884598732,
        });
      },
      (error) =>
        Alert.alert(
          "Erro na localização",
          "Não foi possível encontrar sua localização atual."
        ),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  function onMapPress(e) {
    // createPoint({
    //   tipo: pedagioType,
    //   latLog: {
    //     longitude: e.nativeEvent.coordinate.longitude,
    //     latitude: e.nativeEvent.coordinate.latitude
    //   },
    //   preco: 5.0,
    // })
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
    // createPoint({
    //   tipo: medicalType,
    //   name: "Atendimento médico COVID19",
    //   description: "Atendimento médico para caminhoneiros para combater o avanço da doença.",
    //   latLog: {
    //     longitude: e.nativeEvent.coordinate.longitude,
    //     latitude: e.nativeEvent.coordinate.latitude
    //   },
    // })
    // createPoint({
    //   tipo: stopPointType,
    //   nome: "Ponto de parada CCR",
    //   latLog: {
    //     longitude: e.nativeEvent.coordinate.longitude,
    //     latitude: e.nativeEvent.coordinate.latitude
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
    //     cafe_manha: true,
    //     almoco: true,
    //     janta: true
    //   },
    //   sanitario: {
    //     preco: 0,
    //     avaliacao: 4
    //   },
    //   chuveiro: {
    //     preco: 0,
    //     avaliacao: 5
    //   },
    //   per_noite: {
    //     preco: 10,
    //     avaliacao: 5,
    //   },
    //   borracaria: false,
    //   mecanico: false,
    //   seguranca: 2
    // })
  }
  function onMarkerPress(point) {
    turnOffPointsRef();
    Navigation.navigate("Point", point);
  }
  function Points() {
    return points.map((point) => {
      switch (point.tipo) {
        case pedagioType:
          return (
            <Marker
              onPress={() => {
                console.log(point);
              }}
              coordinate={point.latLog}
              icon={require("../../assets/img/pedagio.png")}
            />
          );
        case stopPointType:
          return (
            <Marker
              onPress={() => {
                console.log(point);
              }}
              coordinate={point.latLog}
              icon={require("../../assets/img/parada.png")}
            />
          );
        case medicalType:
          return (
            <Marker
              onPress={() => {
                console.log(point);
              }}
              coordinate={point.latLog}
              icon={require("../../assets/img/saude.png")}
            />
          );
        case packageType:
          return (
            <Marker
              onPress={() => {
                console.log(point);
              }}
              coordinate={point.latLog}
              icon={require("../../assets/img/pacote.png")}
            />
          );
        default:
          return (
            <Marker
              onPress={() => {
                console.log(point);
              }}
              coordinate={point.latLog}
            />
          );
      }
    });
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
          <Points />
        </MapView>
      </View>
      <SearchBar
        style={styles.search}
        lightTheme
        onChangeText={() => {}}
        onClearText={() => {}}
        icon={{ type: "font-awesome", name: "search" }}
        placeholder="Local de partida"
      />
      <SearchBar
        style={styles.search}
        lightTheme
        onChangeText={() => {}}
        onClearText={() => {}}
        icon={{ type: "font-awesome", name: "search" }}
        placeholder="Destino"
      />
    </>
  );
}
