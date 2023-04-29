import { View , Text} from "react-native";
import {styles} from './Header.style'

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerLog}>
                Solver
            </Text>
        </View>   
    )
}

export default Header