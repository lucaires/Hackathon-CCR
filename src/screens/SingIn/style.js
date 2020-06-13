import { StyleSheet } from "react-native";
import Colors from "../../assets/colors"

export default StyleSheet.create({
   backGround: {
      flex: 1,
      flexDirection: "column",
      // backgroundColor: Colors.blue,
   },
   totalView: {
      flex: 1,
      justifyContent: "center"
   },
   image: {
      width: 263,
      height: 50,
      marginBottom: 25,
      alignSelf: "center"
   },
   formView: {
      marginHorizontal: 40,
      
   },
   esqueciSenhaTexto: {
      textAlign: "center",
   },
   esqueciSenhaButton: {
      marginTop: 10,
      alignItems: "center"
   },
   buttonsView: {
      marginTop: 30,
   },
   text: {
      textAlign: "center",
      color: Colors.white
   },
   button: {
      marginTop: 30,
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