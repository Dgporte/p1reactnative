import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
    },
    headerSkill: {
        backgroundColor: '#202126',
        padding: 15,
        height: 130,
        alignItems: 'center',
        flexDirection: "row",
        zIndex: 1000,
    },
    container1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContainer: {
        flexDirection: "row",
    },
    containerOferta: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContainer2: {
        flexDirection: "row",
    },

    input: {
        backgroundColor: '#292c33',
        marginTop: 20,
        height: 40,
        width: 310,
    },
    logo: {
        position: 'absolute',
        left: 20,
        top: 63,
        width: 25,
        height: 25,
        tintColor: "#5e6168"
    },
    rinnegan: {
        position: 'absolute',
        left: 360,
        top: 56,
        width: 40,
        height: 40,
    },
    tresPontinhos: {
        position: 'absolute',
        left: 330,
        top: 63,
        width: 22,
        height: 22,
        tintColor: "#5e6168"
    },
    textDiv: {
        width: 350,
        height: 20,
        position: 'absolute',
        left: 55,
        top: 105
    },
    textHead: {
        fontSize: 13,
        color: 'white',
        backgroundColor: '#202126',
    },
    spanCarteira: {
        position: 'absolute',
        top: -1.6,
        fontSize: 13,
        color: '#2a79b5',
    },
    lupa: {
        position: 'absolute',
        left: 292,
        top: 63,
        width: 25,
        height: 25,
        tintColor: "#5e6168"
    },
    textDestaque: {
        position: 'absolute',
        fontSize: 15,
        top: 30,
        left: 20,
        color: 'white'
    },
    containerSecundario: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 350,
        backgroundColor: '#1a2a43',
    },
    jogoSecundario: {
    },
    textMais: {
        color: '#6b7789',
        position: 'absolute',
        left: 370,
        top: 25
    },
    textJogoSecundaria: {
        position: 'absolute',
        fontSize: 15,
        top: 25,
        left: 20,
        color: 'white'
    },
    linhaCompra: {
        width: 50,
        height: 2,
        position: 'absolute',
        top: 815,
        left: 20,
        backgroundColor: '#19a0fb'
    }
});