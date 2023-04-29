import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    cont: {
        height: 0,
        display: 'flex',
        alignItems: 'flex-end'
    },
    keyboard: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#a6a6a6',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#5e5e5e',
        borderRadius: 10,
        paddingBottom: 50
    },
    but: {
        position: 'relative',
        bottom: 35,
        width: 45,
        height: 30,
        borderRadius: 10,
        overflow: 'hidden',
        fontSize: 10,
    },

    butCont: {
        height: 1
    },

    keyCont: {
        position: "relative",
        display: 'flex',
        height: 1,
        alignItems: 'flex-end'
    },

    key: {
        height: 40,
        width: '19%',
        marginHorizontal: '0.5%',
        justifyContent: 'center'
    }
});