import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollv: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    padding: 20,
    fontFamily: "Ubuntu_700Bold",
  },
  subTitle: {
    marginLeft: 20,
    fontFamily: "Roboto_500Medium",
  },
  anuncio: {
    marginBottom: 20,
    width: 350,
    height: 200,
    alignSelf: "center",
  },

  anuncio2: {
    marginTop: 20,
    width: 350,
    height: 200,
    alignSelf: "center",
  },

  logo: {
    width: 240,
    height: 100,
    alignSelf: "center",
  },

  imgTel: {
    marginTop: 10,
    width: 350,
    height: 280,
    alignSelf: "center",
  },

  imgCorona: {
    marginTop: 10,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
export default styles;
