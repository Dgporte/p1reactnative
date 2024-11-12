import React from "react";
import {
  View,
  ImageSourcePropType,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { oferta } from "./oferta";
import { LinearGradient } from "expo-linear-gradient";

interface CardOfertas {
  image: ImageSourcePropType;
  tittle: string;
}

export function OfertaJogos({ image, tittle }: CardOfertas) {
  return (
    <View style={oferta.cardContainerSecundaria}>
      <Image source={image} style={oferta.jogos} />
      <LinearGradient colors={["#1b354e", "#1e3551", "#214162"]} style={oferta.divOfertas}>
        <Text style={oferta.textOfertas}>{tittle}</Text>
      </LinearGradient>
    </View>
  );
}
