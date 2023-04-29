import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    cont: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        color: '#fff',
        width: '96%',
        backgroundColor: '#474747',
    },


    elem: {
        width: '100%',
        overflow: 'scroll',
        alignItems: 'center'
    },

    h: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 20
    },

    p: {
        fontSize: 16,
        color: '#fff',
        marginVertical: 10
    }
});

export const styleMath = {
    backgroundColor: '#474747',
    color: 'white',
    width: '100%',
    minHeight: 60,
    
}