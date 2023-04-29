import { View, Text } from "react-native";
import {FC} from "react";
import {styles, styleMath} from './LiveInp.style';
import MathJax from 'react-native-mathjax'
import { opt } from "../../MathJaxOpt";


interface LiveInpProps {
    parsedTexEq: string
}

const LiveInp: FC<LiveInpProps> = ({parsedTexEq}) => {

    return (
        <View style={styles.inpTex}>
            {
                parsedTexEq !== 'undefined'
                ? <MathJax 
                    MathJaxOptions={opt}
                    html={String.raw`$$\color{#fff}{\LARGE{
                        ${parsedTexEq}
                    }}$$`}
                    style = {styleMath}
                />
                : <Text></Text>
            }
        </View>   
    )
}

export default LiveInp