import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, Platform, KeyboardAvoidingView } from "react-native"

import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import {
  Entypo,
  AntDesign
} from "@expo/vector-icons";

import Colors from "../../assets/colors"
import TextInput from "../../components/TextInput"

import Style from "./style"

export default function SingUp() {
  const Navigation = useNavigation()
  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={Style.formView}
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}
      >
        <Text style={Style.text}>Crie com sua conta do Google ou Fecebook:</Text>
        <Button mode="contained" style={Style.withButton} onPress={() => { }} ><AntDesign name={"google"} size={15} color={Colors.white} /> Continuar com Google</Button>
        <Button mode="contained" style={Style.withButton} onPress={() => { }} ><Entypo name={"facebook"} size={15} color={Colors.white} /> Continuar com Facebook</Button>
        <Text style={Style.text}>Ou prencha os campos abaixo:</Text>
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
        <TextInput
          autoCapitalize='none'
          label="Senha"
          secureTextEntry
          maxLength={128}
          // value={formData.password}
          // onChangeText={(value) => setFormData({ ...formData, password: value })}
          returnKeyType={"done"}
        />
        <TextInput
          autoCapitalize='none'
          label="Telefone"
          keyboardType="phone-pad"
          maxLength={128}
          // value={formData.password}
          // onChangeText={(value) => setFormData({ ...formData, password: value })}
          returnKeyType={"done"}
        />
        <Button mode="contained" style={Style.button} onPress={() => Navigation.navigate('SingIn')}>Cadastrar</Button>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}