import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Switch } from "react-native";
import { SvgUri } from "react-native-svg";
import { Rating, AirbnbRating } from "react-native-elements";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Filter() {
  const shield = require("../../assets/shield.png");
  const Navigation = useNavigation();
  const [selectedItem, setSelectedItem] = React.useState([]);

  function filtered() {
    Navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  }

  let stylesitems = styles.item;

  function changeStyle() {
    if (stylesitems == styles.item) {
      stylesitems = styles.selectedItems;
    } else {
      stylesitems = styles.item;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Categorias</Text>
        <View style={styles.categorias}>
          <TouchableOpacity
            style={stylesitems}
            onPress={() => changeStyle()}
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
            style={[styles.item]}
            onPress={() => console.log("hello!!")}
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
            style={[styles.item]}
            onPress={() => console.log("hello!!")}
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
            style={[styles.item]}
            onPress={() => console.log("hello!!")}
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
        </View>
        <View style={styles.filterInfra}>
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
        </View>
        <Text style={styles.title}>Manutenção</Text>
        <View style={styles.filterManu}>
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
        </View>
        <View style={styles.classification}>
          <Text style={styles.title}>Classificação</Text>

          <AirbnbRating
            count={5}
            reviews={["Pessimo", "Ruim", "Regular", "Bom", "Muito bom"]}
            defaultRating={0}
            size={30}
          />
        </View>
        <Text style={styles.title}>Segurança</Text>
        <View style={styles.rating}>
          <Rating
            type="custom"
            ratingImage={shield}
            ratingColor="#3498db"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={3}
            imageSize={40}
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
        </View>
        <Button mode="contained" style={styles.button} onPress={filtered}>
          Aplicar Filtro
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
