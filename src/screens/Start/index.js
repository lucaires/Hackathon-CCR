import React from 'react'
import { ImageBackground, View, Text, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-paper"

import style from "./style"
import Colors  from '../../assets/colors';

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
        <Button mode="contained" style={style.button} text="Já tenho uma conta" onPress={() => Navigation.navigate('SignIn')}>Entrar</Button>
        <Button color={Colors.white} style={style.buttonText} text="criar conta" onPress={() => Navigation.navigate('SignUp')} >criar conta</Button>
      </View>
    </ImageBackground>
  )
}
