import React from "react";
import {
  View,
  ImageSourcePropType,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { footerBiblioteca } from "./footerStyle";

export function Footer() {
  return (
    <View style={footerBiblioteca.navegacao}>
      <Image
        source={require("../../../assets/img/compra.png")}
        style={footerBiblioteca.compra1}
      />
      <Image
        source={require("../../../assets/img/notici.png")}
        style={footerBiblioteca.noticias}
      />
      <Image
        source={require("../../../assets/img/escudo.png")}
        style={footerBiblioteca.escudo}
      />
      <Image
        source={require("../../../assets/img/notification.png")}
        style={footerBiblioteca.notificacao}
      />
      <Image
        source={require("../../../assets/img/treaba.webp")}
        style={footerBiblioteca.tresBarras}
      />
    </View>
  );
}
