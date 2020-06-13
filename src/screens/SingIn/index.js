import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, Platform, KeyboardAvoidingView } from "react-native"

import { useNavigation } from '@react-navigation/native';
import {TextInput} from 'react-native-paper';

import Colors from "../../assets/colors"

import Style from "./style"

const theme = {
  Colors: {
    text: Colors.white,
    primary: Colors.white,
    disabled: Colors.white,
    placeholder: Colors.white,
    background: "#00000000",
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
            // onSubmitEditing={() => { passwordInput.focus(); }}
            returnKeyType={"next"}
            theme={theme}
            label="Email"
            maxLength={255}
            // value={formData.username}
            // onChangeText={(value) => setFormData({ ...formData, username: value })}
          />
          <TextInput
            autoCapitalize='none'
            // ref={(input) => { passwordInput = input; }}
            // onSubmitEditing={_login}
            label="Senha"
            theme={theme}
            secureTextEntry
            maxLength={128}
            // value={formData.password}
            // onChangeText={(value) => setFormData({ ...formData, password: value })}
            returnKeyType={"done"}
          />

          <TouchableOpacity
            style={Style.esqueciSenhaButton}
            // onPress={() => { Navigation.navigate("PasswordResetRequest") }}
          >
            <Text style={Style.esqueciSenhaTexto}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <View style={Style.buttonsView} >
            <TouchableOpacity >
              <View style={Style.button}>
                <Text style={Style.buttonText}>ENTRAR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}