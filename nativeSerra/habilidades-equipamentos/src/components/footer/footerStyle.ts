import { StyleSheet } from "react-native";

export const footerBiblioteca = StyleSheet.create({
    navegacao: {
        display: 'flex',
        flexDirection: 'row',
        gap: 60,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 82,
        backgroundColor: '#202126',
        position: 'absolute',
        top: 815,
        zIndex: 1000,
    },
    compra1: {
        width: 27,
        height: 27,
        tintColor: '#e0e2e7',
        marginBottom: 20,
    },
    noticias: {
        width: 20,
        height: 20,
        tintColor: '#e0e2e7',
        marginBottom: 20

    },
    escudo: {
        width: 30,
        height: 30,
        tintColor: '#e0e2e7',
        marginBottom: 20

    },
    notificacao: {
        width: 22,
        height: 22,
        tintColor: '#e0e2e7',
        marginBottom: 20

    },
    tresBarras: {
        width: 20,
        height: 20,
        tintColor: '#e0e2e7',
        marginBottom: 20

    },
})