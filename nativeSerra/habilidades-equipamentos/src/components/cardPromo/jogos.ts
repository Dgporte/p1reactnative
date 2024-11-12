import { StyleSheet } from "react-native";

export const jogos = StyleSheet.create({

    cardContainer: {
        width: 340,
        overflow: 'hidden',
    },
    imagem: {
        width: 330,
        height: 230,
        margin: 0,
        position: 'absolute',
        top: 50,
        left: 20
    },
    divSecundaria: {
        position: 'absolute',
        top: 245,
        left: 20,
        width: 330,
        height: 75,

    },
    textSecundario: {
        color: 'white',
        marginTop: 5,
        fontWeight: '500',
        marginLeft: 8,
        fontSize: 24
    },
    colunaPreco: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        height: 'auto',
        position: 'absolute',
        top: 35,
        left: 8
    },
    desconto: {
        display: 'flex',
        width: 52,
        height: 25,
        backgroundColor: '#4b6d15',
    },
    textDesconto: {
        marginTop: 3,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        color: '#a5d220',
        fontSize: 17

    },
    preco: {
        display: 'flex',
        flexDirection: 'row',
        width: 125,
        height: 25,
        backgroundColor: '#354552'
    },
    textPreco: {
        marginTop: 5,
        marginLeft: 5,
        fontWeight: '600',
        textDecorationLine: 'line-through',
        color: '#708290'
    },
    spanPreco: {
        marginTop: 5,
        marginLeft: 5,
        fontWeight: '600',
        color: '#a5d220'
    },
});