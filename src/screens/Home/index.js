import React from "react";
import { Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./style";

export default function Load() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollv}>
        <Text style={styles.title}>Bem vindo!</Text>
        <Image
          style={styles.logo}
          source={require("../../assets/CCR20anos.png")}
        />
        <Image
          style={styles.imgTel}
          source={require("../../assets/CCRcontato.png")}
        />
        <Image
          style={styles.imgCorona}
          source={require("../../assets/CCRcoronavirus.png")}
        />
        <Text style={styles.title}>
          CCR SE UNE A TEXACO EM AÇÃO À CAMINHONEIROS CONTRA O COVID-19
        </Text>
        <Text style={styles.subTitle}>
          A Carreta Texaco 2020 percorrerá rodovias sob gestão do Grupo CCR
          Serviços de saúde e alimentação estarão disponíveis em cinco estados.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
