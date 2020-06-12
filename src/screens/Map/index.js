import React from "react";
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import styles from "./style"

export default function Map() {
    
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
  );
}
