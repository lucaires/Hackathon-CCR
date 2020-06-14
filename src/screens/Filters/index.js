import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Filter() {
  const shield = require("../../assets/shield.png");
  const Navigation = useNavigation();

  function filtered() {
    Navigation.navigate("Map")
  }
  const [stylesitems, setStylesitems] = React.useState(styles.item);
  const [stylesitems1, setStylesitems1] = React.useState(styles.item);
  const [stylesitems2, setStylesitems2] = React.useState(styles.item);
  const [stylesitems3, setStylesitems3] = React.useState(styles.item);
  const [stylesitems4, setStylesitems4] = React.useState(styles.item);
  const [stylesitems5, setStylesitems5] = React.useState(styles.item);
  const [stylesitems6, setStylesitems6] = React.useState(styles.item);
  const [stylesitems7, setStylesitems7] = React.useState(styles.item);
  const [stylesitems8, setStylesitems8] = React.useState(styles.item);
  const [stylesitems9, setStylesitems9] = React.useState(styles.item);
  const [stylesitems10, setStylesitems10] = React.useState(styles.item);
  const [stylesitems11, setStylesitems11] = React.useState(styles.item);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Categorias</Text>
        <View style={styles.categorias}>
          <TouchableOpacity
            style={stylesitems}
            onPress={() =>
              setStylesitems(
                stylesitems == styles.item ? styles.selectedItems : styles.item
              )
            }
            activeOpacity={0.6}
          >
            <SvgUri
              width={42}
              height={42}
              uri={"https://image.flaticon.com/icons/svg/2945/2945609.svg"}
            />
            <Text style={styles.itemTitle}>Cargas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesitems1}
            onPress={() =>
              setStylesitems1(
                stylesitems1 == styles.item ? styles.selectedItems : styles.item
              )
            }
            activeOpacity={0.6}
          >
            <SvgUri
              width={42}
              height={42}
              uri={"https://image.flaticon.com/icons/svg/829/829274.svg"}
            />
            <Text style={styles.itemTitle}>Pedágios</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesitems2}
            onPress={() =>
              setStylesitems2(
                stylesitems2 == styles.item ? styles.selectedItems : styles.item
              )
            }
            activeOpacity={0.6}
          >
            <SvgUri
              width={42}
              height={42}
              uri={"https://image.flaticon.com/icons/svg/1170/1170466.svg"}
            />
            <Text style={styles.itemTitle}>Postos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categorias}>
          <TouchableOpacity
            style={stylesitems3}
            onPress={() =>
              setStylesitems3(
                stylesitems3 == styles.item ? styles.selectedItems : styles.item
              )
            }
            activeOpacity={0.6}
          >
            <SvgUri
              width={42}
              height={42}
              uri={"https://image.flaticon.com/icons/svg/2983/2983579.svg"}
            />
            <Text style={styles.itemTitle}>Postos de Saúde</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Infraestrutura</Text>
        <View style={styles.filterInfra}>
          <TouchableOpacity
            style={stylesitems4}
            onPress={() =>
              setStylesitems4(
                stylesitems4 == styles.item ? styles.selectedItems : styles.item
              )
            }
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
            style={stylesitems5}
            onPress={() =>
              setStylesitems5(
                stylesitems5 == styles.item ? styles.selectedItems : styles.item
              )
            }
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
            style={stylesitems6}
            onPress={() =>
              setStylesitems6(
                stylesitems6 == styles.item ? styles.selectedItems : styles.item
              )
            }
            activeOpacity={0.6}
          >
            <SvgUri
              width={42}
              height={42}
              uri={"https://image.flaticon.com/icons/svg/2933/2933950.svg"}
            />
            <Text style={styles.itemTitle}>Chuveiro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterInfra}>
          <TouchableOpacity
            style={stylesitems7}
            onPress={() =>
              setStylesitems7(
                stylesitems7 == styles.item ? styles.selectedItems : styles.item
              )
            }
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
            style={stylesitems8}
            onPress={() =>
              setStylesitems8(
                stylesitems8 == styles.item ? styles.selectedItems : styles.item
              )
            }
            activeOpacity={0.6}
          >
            <SvgUri
              width={42}
              height={42}
              uri={"https://image.flaticon.com/icons/svg/3030/3030909.svg"}
            />
            <Text style={styles.itemTitle}>Atendimento Médico</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Manutenção</Text>
        <View style={styles.filterManu}>
          <TouchableOpacity
            style={stylesitems9}
            onPress={() =>
              setStylesitems9(
                stylesitems9 == styles.item ? styles.selectedItems : styles.item
              )
            }
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
            style={stylesitems10}
            onPress={() =>
              setStylesitems10(
                stylesitems10 == styles.item
                  ? styles.selectedItems
                  : styles.item
              )
            }
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
            style={stylesitems11}
            onPress={() =>
              setStylesitems11(
                stylesitems11 == styles.item
                  ? styles.selectedItems
                  : styles.item
              )
            }
            activeOpacity={0.6}
          >
            <SvgUri
              width={42}
              height={42}
              uri={"https://image.flaticon.com/icons/svg/812/812862.svg"}
            />
            <Text style={styles.itemTitle}>Eletricista</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" style={styles.button} onPress={filtered}>
          Aplicar Filtro
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
