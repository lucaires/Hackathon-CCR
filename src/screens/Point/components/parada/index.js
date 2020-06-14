import React from 'react'
import { ScrollView, View, Text, StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from "react-native-paper"
import Stars from 'react-native-stars';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "../../../../components/Divider"

import Style from "./style"
import Colors from '../../../../assets/colors';

export default function Parada({ pointData }) {
  return (
    <ScrollView>
      <View style={Style.totalView}>
        <Text style={Style.name}>{pointData.nome}</Text>
        <View style={Style.stars}>
          <Text style={Style.text}>Avaliação do local: </Text>
          <Stars
            default={pointData.avaliacao}
            disabled
            spacing={4}
            starSize={40}
            count={5}
            fullStar={<FontAwesome name={'star'} size={30} style={[Style.starStyle]} />}
            emptyStar={<FontAwesome name={'star-o'} size={30} style={[Style.starStyle, Style.emptystarStyle]} />}
          />
        </View>
        <View style={Style.stars}>
          <Text style={Style.text}>Preço do combustível: </Text>
          <Stars
            default={pointData.conbustivel.preco}
            disabled
            spacing={4}
            starSize={40}
            count={5}
            fullStar={<FontAwesome5 name={'money-bill-alt'} size={30} style={[Style.moneyStarStyle]} />}
            emptyStar={<FontAwesome name={'money'} size={30} style={[Style.moneyStarStyle, Style.moneyEmptyStarStyle]} />}
          />
        </View>
      </View>
      <Text style={Style.title}>Serviços</Text>
      <View style={Style.totalView}>
        <View style={Style.stars}>
          <Text style={Style.text}>{pointData.medico.pago ? "Atendimento médico pago" : "Atendimento médico grátis"}</Text>
          <Text style={Style.text}>{pointData.food.cafe ? "Serve café da manhã" : "Não serve café da manhã"}</Text>
          <Text style={Style.text}>{pointData.food.almoco ? "Serve almoço" : "Não serve almoço"}</Text>
          <Text style={Style.text}>{pointData.food.janta ? "Serve janta" : "Não serve janta"}</Text>
          <Text style={Style.text}>{pointData.borracaria ? "Possui borracheiro" : "Não possui borracheiro"}</Text>
          <Text style={Style.text}>{pointData.mecanico ? "Possui mecânico" : "Não possui mecânico"}</Text>
        </View>
        <Divider />
        <View style={Style.stars}>
          <Text style={Style.text}>Preço do sanitário: R$ {parseFloat(pointData.sanitario.preco).toFixed(2).replace(".", ",")}</Text>
          <Text style={Style.text}>Qualidade dos sanitários: </Text>
          <Stars
            default={pointData.sanitario.avaliacao}
            disabled
            spacing={4}
            starSize={40}
            count={5}
            fullStar={<FontAwesome name={'star'} size={30} style={[Style.starStyle]} />}
            emptyStar={<FontAwesome name={'star-o'} size={30} style={[Style.starStyle, Style.emptystarStyle]} />}
          />
        </View>
        <Divider />
        <View style={Style.stars}>
          <Text style={Style.text}>Preço do chuveiro: R$ {parseFloat(pointData.chuveiro.preco).toFixed(2).replace(".", ",")}</Text>
          <Text style={Style.text}>Qualidade dos sanitários: </Text>
          <Stars
            default={pointData.chuveiro.avaliacao}
            disabled
            spacing={4}
            starSize={40}
            count={5}
            fullStar={<FontAwesome name={'star'} size={30} style={[Style.starStyle]} />}
            emptyStar={<FontAwesome name={'star-o'} size={30} style={[Style.starStyle, Style.emptystarStyle]} />}
          />
        </View>
        <Divider />
        <View style={Style.stars}>
          <Text style={Style.text}>Preço do per noite : R$ {parseFloat(pointData.per_noite.preco).toFixed(2).replace(".", ",")}</Text>
          <Text style={Style.text}>Qualidade do per noite: </Text>
          <Stars
            default={pointData.per_noite.avaliacao}
            disabled
            spacing={4}
            starSize={40}
            count={5}
            fullStar={<FontAwesome name={'star'} size={30} style={[Style.starStyle]} />}
            emptyStar={<FontAwesome name={'star-o'} size={30} style={[Style.starStyle, Style.emptystarStyle]} />}
          />
        </View>
        <Divider />
        <View style={Style.stars}>
          <Text style={Style.text}>Segurança do local: </Text>
          <Stars
            default={pointData.seguranca}
            disabled
            spacing={4}
            starSize={40}
            count={5}
            fullStar={<MaterialCommunityIcons name={'shield'} size={30} style={[Style.moneyStarStyle]} />}
            emptyStar={<MaterialCommunityIcons name={'shield-outline'} size={30} style={[Style.moneyStarStyle, Style.moneyEmptyStarStyle]} />}
          />
        </View>
      </View>
    </ScrollView>
  )
}
