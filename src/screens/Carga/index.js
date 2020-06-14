import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, Platform, KeyboardAvoidingView } from "react-native"
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import {
  Entypo,
  AntDesign
} from "@expo/vector-icons";

import Colors from "../../assets/colors"
import TextInput from "../../components/TextInput"

import Style from "./style"

export default function Carga() {
  const Navigation = useNavigation()
  const [Mark, setMark] = React.useState(null)
  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={Style.formView}
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}
      >
        <Text style={Style.text}>Bem-vindo ao cadastro de carga!</Text>
        <Text style={Style.text}>Associe a sua conta do Google ou Fecebook:</Text>
        <Button mode="contained" style={Style.withButton} onPress={() => { }} ><AntDesign name={"google"} size={15} color={Colors.white} /> Associa ao Google</Button>
        <Button mode="contained" style={Style.withButton} onPress={() => { }} ><Entypo name={"facebook"} size={15} color={Colors.white} /> Associa ao Facebook</Button>
        <Text style={Style.text}>Prencha as informações sobre sua carga e identificação:</Text>
        <TextInput
          label="Nome completo"
          maxLength={128}
          // value={formData.password}
          // onChangeText={(value) => setFormData({ ...formData, password: value })}
          returnKeyType={"done"}
        />
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
          label="Telefone"
          keyboardType="phone-pad"
          maxLength={128}
          // value={formData.password}
          // onChangeText={(value) => setFormData({ ...formData, password: value })}
          returnKeyType={"done"}
        />
        <TextInput
          autoCapitalize='none'
          label="Quantidade de carga"
          keyboardType="number"
          maxLength={128}
          // value={formData.password}
          // onChangeText={(value) => setFormData({ ...formData, password: value })}
          returnKeyType={"done"}
        />
        <TextInput
          autoCapitalize='none'
          label="Valor a ser pago"
          keyboardType="number"
          maxLength={128}
          // value={formData.password}
          // onChangeText={(value) => setFormData({ ...formData, password: value })}
          returnKeyType={"done"}
        />
      </KeyboardAvoidingView>
      <Text style={Style.title}>Selecione o destino:</Text>
      <KeyboardAvoidingView
        style={Style.formView}
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}
      >
        <View style={Style.container}>
          <MapView
            style={Style.mapStyle}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
            onPress={(e) => setMark(e.nativeEvent.coordinate)}
          >
            {Mark ? <Marker coordinate={Mark} /> : null}
          </MapView>
        </View>
        <Button mode="contained" style={Style.button} onPress={() => alert("Carga cadastrada", "Sua carga foi cadastrada e agora aguarda por um motorista.")}>Cadastrar carga</Button>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}