import React from "react"
import { TextInput as Input, View, Text } from "react-native"

import Style from "./style"
import Colors from "../../assets/colors"

export default function TextInput({
  focusedColor = Colors.black,
  noFocusedColor = Colors.gray,
  label = "",
  ...props }) {
  const [focus, setFocus] = React.useState(false)
  return (
    <View>
      <Text>{label}</Text>
      <Input
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onSelectionChange={() => setFocus(!focus)}
        style={focus ? { ...Style.textInputFocus, borderColor: focusedColor, } : { ...Style.textInput, borderColor: noFocusedColor }}
      />
    </View>
  )
}
