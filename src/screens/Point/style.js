import React from "react"
import { StyleSheet } from "react-native";

import Colors from "../../assets/colors"

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 40
  },
  button: {
    marginBottom: 20,
    backgroundColor: Colors.blue
  },
  buttonText:{
    color: Colors.white
  },
  logo:{
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold"
  },
  slogan:{
    color: "#fff",
    fontSize: 25
  }
})
