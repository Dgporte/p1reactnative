import React from "react";
import { View, ImageSourcePropType,  Text, StyleSheet, Image } from 'react-native';
import { jogos } from "./jogos";
import { LinearGradient } from "expo-linear-gradient";

interface CardJogos {
  imagem: ImageSourcePropType;
  tittle: string;
  desconto: string;
  precoOriginal: string;
  precoComDesconto: string;
}


export function JogosPromocao ({imagem, tittle, desconto, precoOriginal, precoComDesconto}:CardJogos) {
    return (
        <View style={jogos.cardContainer}>
      <Image 
          source={imagem}
          style={jogos.imagem}
        />
        <LinearGradient colors={["#0d1721", "#142336", "#172940", "#1a344d"]} style={jogos.divSecundaria}>
        <Text style={jogos.textSecundario}>{tittle}</Text>
        <View style={jogos.colunaPreco}>
        <View style={jogos.desconto}>
        <Text style={jogos.textDesconto}>{desconto}</Text>
        </View>
        <View style={jogos.preco}>
        <Text style={jogos.textPreco}>{precoOriginal}</Text>
        <Text style={jogos.spanPreco}>{precoComDesconto}</Text>
        </View>
        </View>
        </LinearGradient>
      </View>
    )
}