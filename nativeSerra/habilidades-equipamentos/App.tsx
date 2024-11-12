import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { biblioteca } from "./appStyles";
import { Footer } from "./src/components/footer/Footer";


const image = [
    {id: '1', src: require('./assets/img/Left4Dead2.jpg')},
    {id: '2', src: require('./assets/img/silenthill2.jpg')},
    {id: '3', src: require('./assets/img/revillagebiblioteca.jpg')},
    {id: '4', src: require('./assets/img/reddead2biblioteca.jpg')},
    {id: '5', src: require('./assets/img/outlast.jpg')},
    {id: '6', src: require('./assets/img/re2biblioteca.jpg')},
    {id: '7', src: require('./assets/img/re7biblioteca.jpg')},
    {id: '8', src: require('./assets/img/re3biblioteca.jpg')},
    {id: '9', src: require('./assets/img/re4biblioteca.jpg')},
    {id: '10', src: require('./assets/img/godofwarbiblioteca.jpg')},
    {id: '11', src: require('./assets/img/darksouls3.jpg')},
    {id: '12', src: require('./assets/img/daysgonebiblioteca.jpeg')},
    {id: '13', src: require('./assets/img/thelast.png')},
    {id: '14', src: require('./assets/img/cod3.webp')},
    {id: '15', src: require('./assets/img/reremake.jpeg')},
]


export default function App () {
    return (
    <View style={biblioteca.containerBiblioteca}>
        <View style={biblioteca.headerBiblioteca}>
        <Image
          source={require("./assets/img/rinnegan.jpg")}
          style={biblioteca.rinneganBiblioteca}
        />
            <Text style={biblioteca.tituloBiblioteca}>BIBLIOTECA</Text>
        </View>
        <TextInput style={biblioteca.inputBiblioteca}/>
            <Image source={require("./assets/img/lupa.png")} style={biblioteca.lupaBiblioteca} />
        <View style={biblioteca.ordenadorPrincipal}>
        <Text style={biblioteca.ordenarBiblioteca}>ORDENAR POR:</Text>
        <View style={biblioteca.recenteBiblioteca}>
            <Image source={require("./assets/img/arrowbaixo.png")}
                style={biblioteca.setaparabaixo}
                />
            <Text style={biblioteca.textRecente}>Recentes</Text>
        </View>
        </View>
        <View style={biblioteca.jogosContainer}>
        <FlatList
      data={image}
      keyExtractor={(item) => item.id}
      numColumns={3} 
      renderItem={({ item }) => (
        <View style={biblioteca.imageContainer}>
          <Image source={item.src} style={biblioteca.image} />
        </View>
      )}
    />
    </View>
        <Footer></Footer>
    </View>
    )
}