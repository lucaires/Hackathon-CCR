import { StyleSheet } from "react-native";
import Colors from "../../assets/colors"

export default StyleSheet.create({
   backGround: {
      flex: 1,
      flexDirection: "column",
      // backgroundColor: Colors.blue,
   },
   image: {
      width: 263,
      height: 50,
      marginBottom: 25,
      alignSelf: "center"
   },
   formView: {
      margin: 40,
      
   },
   text: {
      textAlign: "center",
      color: Colors.black,
      marginVertical: 10
   },
   withButton: {
      marginVertical: 10,
      backgroundColor: Colors.blue,
      color: Colors.white,
      justifyContent: "center"
   },
   button: {
      marginVertical: 30,
      backgroundColor: Colors.blue,
      color: Colors.white
   },
   buttonText: {
      fontWeight: "bold",
      textAlign: "center",
   },
   singUpText: {
      fontWeight: "bold",
      textAlign: "center",
   }
});