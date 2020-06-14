import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, Platform, KeyboardAvoidingView, ViewBase } from "react-native"

import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import {
  Entypo,
  AntDesign
} from "@expo/vector-icons";

import Colors from "../../assets/colors"
import TextInput from "../../components/TextInput"

import Style from "./style"

export default function SingIn() {
  const Navigation = useNavigation()

  function singIn() {
    Navigation.reset({
      index: 0,
      routes: [
        { name: "Main" }
      ]
    })
  }

  return (
    <ScrollView style={Style.totalView}>
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
          label="Email"
          maxLength={255}
        // value={formData.username}
        // onChangeText={(value) => setFormData({ ...formData, username: value })}
        />
        <TextInput
          autoCapitalize='none'
          label="Senha"
          secureTextEntry
          maxLength={128}
          // value={formData.password}
          // onChangeText={(value) => setFormData({ ...formData, password: value })}
          returnKeyType={"done"}
        />

        <TouchableOpacity style={Style.esqueciSenhaButton}>
          <Text style={Style.esqueciSenhaTexto}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Button mode="contained" style={Style.button} onPress={singIn} >Entrar</Button>
        <Text style={Style.text}>Ou:</Text>
        <Button mode="contained" style={Style.withButton} onPress={singIn} ><AntDesign name={"google"} size={15} color={Colors.white} /> Entrar com Google</Button>
        <Button mode="contained" style={Style.withButton} onPress={singIn} ><Entypo name={"facebook"} size={15} color={Colors.white} /> Entrar com Facebook</Button>
        <Button color={Colors.black} onPress={() => Navigation.navigate('SingUp')} >Não tenho um conta</Button>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}