import { TextInput, View, Button } from "react-native";
import { FC } from "react";
import {styles} from './Equatinp.style'

interface EquatinpProps {
    equatStr: string,
    setEquationInp: (quationInp: string) => void,
    solve: () => void
}


const EquatInp: FC<EquatinpProps> = ({equatStr, setEquationInp, solve}) => {

    return (
        <View style={styles.cont}>
            <TextInput 
                style={styles.inp}
                value={equatStr}
                placeholder='Enter your equation'
                onChangeText={(text): void => {
                    setEquationInp(text);
                }}
            />
            <Button
                title='='
                color='#474747'
                onPress={solve}
            />
        </View>   
    )
}

export default EquatInp