import React from "react"
import { TextInput as Input, View, Text } from "react-native"

import Colors from "../../assets/colors"

export default function Divider(){
  return (
    <View style={{borderBottomWidth: 1, borderColor: Colors.gray}}/>
  )
}
