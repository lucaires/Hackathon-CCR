import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, Platform, KeyboardAvoidingView } from "react-native"

import { useNavigation } from '@react-navigation/native';
import {TextInput , Button} from 'react-native-paper';

import Colors from "../../assets/colors"

import Style from "./style"

const theme = {
  Colors: {
    text: Colors.blue,
    primary: Colors.blue,
    disabled: Colors.blue,
    placeholder: Colors.blue,
    background: "#0000",
  },
  animation: {
    scale: 0.3
  }
}
export default function SingIn() {
  const Navigation = useNavigation()
  return (
    <View
      style={Style.backGround}
    >
      <View style={Style.totalView}>
        <KeyboardAvoidingView
          style={Style.formView}
          behavior={Platform.select({
            ios: 'padding',
            android: null,
          })}
        >
          <TextInput
          
            keyboardType="email-address"
            autoCapitalize='none'
            theme={theme}
            label="Email"
            maxLength={255}
            // value={formData.username}
            // onChangeText={(value) => setFormData({ ...formData, username: value })}
          />
          <TextInput
            autoCapitalize='none'
            label="Senha"
            theme={theme}
            secureTextEntry
            maxLength={128}
            // value={formData.password}
            // onChangeText={(value) => setFormData({ ...formData, password: value })}
            returnKeyType={"done"}
          />

          <TouchableOpacity style={Style.esqueciSenhaButton}>
            <Text style={Style.esqueciSenhaTexto}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <Button mode="contained" style={Style.button} onPress={() => Navigation.navigate('Main')} >Entrar</Button>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}