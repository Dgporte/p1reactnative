import { StyleSheet } from "react-native";

export const biblioteca = StyleSheet.create({
    containerBiblioteca: {
        width: '100%',
        height: '100%',
        backgroundColor: '#292c33'
    },
    headerBiblioteca: {
        backgroundColor: '#202126',
        padding: 15,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tituloBiblioteca: {
        color: 'white',
        position: 'absolute',
        top: 72,
        fontSize: 22
    },
    inputBiblioteca: {
        width: '95%',
        backgroundColor: '#343843',
        height: 40,
        marginTop: 15,
        marginLeft: 10
    },
    ordenadorPrincipal: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
        position: 'absolute',
        top: 195,
        left: 11,
        gap: 10,
        alignItems: 'center'
    },
    ordenarBiblioteca: {
        color: '#7a7f85',
    },
    recenteBiblioteca: {
        width: '70%',
        height: 42,
        backgroundColor: '#1997fe',
        borderRadius: 5,
        justifyContent: 'center'
    },
    textRecente: {
        color: 'white',
        marginLeft: 5,
        fontSize: 18,
        fontWeight: '600'
    },
    lupaBiblioteca: {
        position: 'absolute',
        left: 370,
        top: 133,
        width: 25,
        height: 25,
        tintColor: "#5e6168"
    },
    rinneganBiblioteca: {
        position: 'absolute',
        left: 360,
        top: 56,
        width: 40,
        height: 40,
    },
    jogosContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 5,
        paddingTop: 75,

    },
    imageContainer: {
        flex: 1,
        margin: 5,

    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    setaparabaixo: {
        position: 'absolute',
        top: 12,
        left: 260,
        width: 20,
        height: 20
    }
})