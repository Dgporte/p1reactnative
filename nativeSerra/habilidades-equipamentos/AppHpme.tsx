import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { JogosPromocao } from "./src/components/cardPromo/JogosPromocao";
import { OfertaJogos } from "./src/components/ofertasEspeciais/OfertaJogos";
import { LinearGradient } from "expo-linear-gradient";
import { Footer } from "./src/components/footer/Footer";

export default function AppHpme() {
  return (
    <LinearGradient
      colors={["#1c3f5b", "#1a3956", "#223f5f"]}
      style={styles.container}
    >
      <View style={styles.headerSkill}>
        <TextInput
          style={styles.input}
          placeholder="          STEAM"
          placeholderTextColor="#5e6168"
        />
        <Image
          source={require("./assets/img/logosteam.png")}
          style={styles.logo}
        />
        <Image
          source={require("./assets/img/rinnegan.jpg")}
          style={styles.rinnegan}
        />
        <Image
          source={require("./assets/img/trespontinhos.png")}
          style={styles.tresPontinhos}
        />
        <Image source={require("./assets/img/lupa.png")} style={styles.lupa} />
        <TouchableOpacity style={styles.textDiv}>
          <Text style={styles.textHead}>
            MENU LISTA DE DESEJOS CARTEIRA
            <Text style={styles.spanCarteira}>(R$ 0,00)</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.textDestaque}>DESTAQUES E RECOMENDADOS</Text>
        <View style={styles.container1}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            <JogosPromocao
              imagem={require("./assets/img/residentevil4.jpg")}
              tittle="Resident Evil 4"
              desconto="-50%"
              precoOriginal="R$ 169,00"
              precoComDesconto="R$ 84,50"
            ></JogosPromocao>
            <JogosPromocao
              key={2}
              imagem={require("./assets/img/deadspace.jpg")}
              tittle="Dead Space"
              desconto="-63%"
              precoOriginal="R$ 249,00"
              precoComDesconto="R$ 90,00"
            ></JogosPromocao>
            <JogosPromocao
              key={3}
              imagem={require("./assets/img/reddead.webp")}
              tittle="Red Dead Redemption 2"
              desconto="-67%"
              precoOriginal="R$ 299,90"
              precoComDesconto="R$ 99,00"
            ></JogosPromocao>
            <JogosPromocao
              key={4}
              imagem={require("./assets/img/re7.jpg")}
              tittle="Resident Evil 7"
              desconto="-60%"
              precoOriginal="R$ 66,90"
              precoComDesconto="R$ 26,76"
            ></JogosPromocao>
            <JogosPromocao
              key={5}
              imagem={require("./assets/img/godofwar.avif")}
              tittle="God Of War"
              desconto="-70%"
              precoOriginal="R$ 199,90"
              precoComDesconto="R$ 60,00"
            ></JogosPromocao>
            <JogosPromocao
              key={6}
              imagem={require("./assets/img/doometernal.webp")}
              tittle="Doom Eternal"
              desconto="-53%"
              precoOriginal="R$ 149,00"
              precoComDesconto="R$ 70,00"
            ></JogosPromocao>
          </ScrollView>
        </View>
        <LinearGradient
          colors={["#1a2e46", "#1a2b44", "#182734"]}
          style={styles.containerSecundario}
        >
          <View style={styles.jogoSecundario}>
            <Text style={styles.textJogoSecundaria}>OFERTAS ESPECIAIS</Text>
            <Text style={styles.textMais}>Mais</Text>
          </View>
          <View style={styles.containerOferta}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer2}
            >
              <OfertaJogos
                key={7}
                image={require("./assets/img/daysgone.jpg")}
                tittle="OFERTAS DO FIM DE SEMANA"
              ></OfertaJogos>
              <OfertaJogos
                key={8}
                image={require("./assets/img/leftfordead.jpg")}
                tittle="PROMOÇÃO DA DISTRIBUIDORA"
              ></OfertaJogos>
              <OfertaJogos
                key={8}
                image={require("./assets/img/gta5.jpg")}
                tittle="PROMOÇÕES DO DIA"
              ></OfertaJogos>
              <OfertaJogos
                key={8}
                image={require("./assets/img/hogwarts.webp")}
                tittle="PROMOÇÃO DE FANTASIA"
              ></OfertaJogos>
            </ScrollView>
          </View>
        </LinearGradient>
      </ScrollView>
      <Footer></Footer>
    </LinearGradient>
  );
}
