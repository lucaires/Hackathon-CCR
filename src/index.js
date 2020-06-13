import React from "react";

import * as firebase from 'firebase';

import Routes from "./routes";
import { Provider as PaperProvider } from 'react-native-paper';

const firebaseConfig = {
  apiKey: "AIzaSyCWAOgnCaClxUndQzS_OP-bp_vAP268e54",
  authDomain: "hackathon-ccr.firebaseapp.com",
  databaseURL: "https://hackathon-ccr.firebaseio.com",
  projectId: "hackathon-ccr",
  storageBucket: "hackathon-ccr.appspot.com",
  messagingSenderId: "618188625930",
  appId: "1:618188625930:web:97a302f756b50d5753a7f3",
  measurementId: "G-XJEBTSJL9R"
};

export default function App() {
  React.useEffect(() => {
    firebase.initializeApp(firebaseConfig)
  }, [])
  return (
    <Routes />
  );
}
