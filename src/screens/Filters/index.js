import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";
import { AirbnbRating } from "react-native-elements";
import { Button } from "react-native-paper";

import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Filter() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Infraestrutura</Text>
      <ScrollView
        style={styles.filterInfra}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => console.log("hello!!")}
          activeOpacity={0.6}
        >
          <SvgUri
            width={42}
            height={42}
            uri={"https://image.flaticon.com/icons/svg/2962/2962901.svg"}
          />
          <Text style={styles.itemTitle}>Alimentação</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => console.log("hello!!")}
          activeOpacity={0.6}
        >
          <SvgUri
            width={42}
            height={42}
            uri={"https://image.flaticon.com/icons/svg/2958/2958125.svg"}
          />
          <Text style={styles.itemTitle}>Local para descanso</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => console.log("hello!!")}
          activeOpacity={0.6}
        >
          <SvgUri
            width={42}
            height={42}
            uri={"https://image.flaticon.com/icons/svg/2933/2933950.svg"}
          />
          <Text style={styles.itemTitle}>Chuveiro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => console.log("hello!!")}
          activeOpacity={0.6}
        >
          <SvgUri
            width={42}
            height={42}
            uri={"https://image.flaticon.com/icons/svg/2965/2965763.svg"}
          />
          <Text style={styles.itemTitle}>Sanitário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => console.log("hello!!")}
          activeOpacity={0.6}
        >
          <SvgUri
            width={42}
            height={42}
            uri={"https://image.flaticon.com/icons/svg/3030/3030909.svg"}
          />
          <Text style={styles.itemTitle}>Atendimento Médico</Text>
        </TouchableOpacity>
      </ScrollView>
      <Text style={styles.title}>Manutenção</Text>
      <ScrollView
        style={styles.filterInfra}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => console.log("hello!!")}
          activeOpacity={0.6}
        >
          <SvgUri
            width={42}
            height={42}
            uri={"https://image.flaticon.com/icons/svg/3003/3003740.svg"}
          />
          <Text style={styles.itemTitle}>Mecânico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => console.log("hello!!")}
          activeOpacity={0.6}
        >
          <SvgUri
            width={42}
            height={42}
            uri={"https://image.flaticon.com/icons/svg/784/784877.svg"}
          />
          <Text style={styles.itemTitle}>Borracheiro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => console.log("hello!!")}
          activeOpacity={0.6}
        >
          <SvgUri
            width={42}
            height={42}
            uri={"https://image.flaticon.com/icons/svg/812/812862.svg"}
          />
          <Text style={styles.itemTitle}>Eletricista</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.classification}>
        <Text style={styles.title}>Classificação de Segurança</Text>

        <AirbnbRating
          count={5}
          reviews={["Pessimo", "Ruim", "Regular", "Bom", "Muito bom"]}
          defaultRating={0}
          size={30}
        />
      </View>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => Navigation.navigate("Map")}
      >
        Filtrar
      </Button>
    </SafeAreaView>
  );
}
