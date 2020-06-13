import React from 'react'
import { ImageBackground, View, Text, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-paper"

import style from "./style"

export default function Start() {
  const Navigation = useNavigation()
  return (
    <ImageBackground style={style.backgroundImage} source={require("../../assets/img/startBackground.png")}>
      <StatusBar
        translucent
        backgroundColor="#0000"
      />
      <View>
        <Text style={style.logo}>Boa Viagem</Text>
        <Text style={style.slogan}>O almanaque do caminhoneiro brasileiro</Text>
      </View>
      <View >
        <Button style={{container: style.button}} raised primary text="Já tenho uma conta" onPress={() => Navigation.navigate('SignIn')} />
        <Button style={{text: style.buttonText}} text="criar conta" onPress={() => Navigation.navigate('SignUp')} />
      </View>
    </ImageBackground>
  )
}
