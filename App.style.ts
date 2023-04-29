import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    App: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '100%',
      width: '100%'
    },
  
    wrapper: {
      minHeight: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#262626',
    },

    cont: {
      alignItems: 'center'
    },

    out: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }
});