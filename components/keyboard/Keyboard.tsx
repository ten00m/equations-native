import { View, Button, Image } from "react-native";
import {styles} from './Keyboard.style'
import { FC, useState } from "react";

interface KeyboardProps{
    keyDown: (key: string) => void;
}


const Keyboard: FC<KeyboardProps> = ({keyDown}) => {
    const [isHidden, setIsHidden] = useState(true)
    const keys = [
        'c', '7', '8', '9', '+',
        '<-', '4', '5', '6', '-',
        'x^3', '1', '2', '3', '*',
        'x^2', '.', '0', '^', '/',
        'x', '(', ')', 'sqrt()', '=',
    ];

    const openKeyb = () => {
        setIsHidden(!isHidden);
    }

    return (
        <View style={styles.cont}>
            <View style={{...styles.keyCont, bottom: isHidden? 0 : 200}}>
                <View style={styles.butCont}>
                    <View style={styles.but}>
                        <Button
                            title='keyboard'
                            color={'#777777'}
                            onPress={openKeyb}
                        />
                    </View>
                </View>
                <View style={styles.keyboard}>
                    {
                        keys.map((key, num) => 
                         <  View style={styles.key} key={num}>
                                <Button
                                    color={'#414141'}
                                    title={key}
                                    onPress={() => {keyDown(key)}}
                                />
                            </View>
                        )
                    }
            </View>
            </View>
        </View>   
    )
}

export default Keyboard