import { View, Text} from "react-native";
import {styles, styleMath} from './LatexOut.style'
import { FC } from "react";
import MathJax from 'react-native-mathjax'
import {opt} from '../../MathJaxOpt'

interface LatexOutProps {
    solution: Array<any>
    getParsedSol: (s: any) => string
}


const LatexOut: FC<LatexOutProps> = ({solution, getParsedSol}) => {
    return (
        <View style={styles.cont}>
            {
                solution 
                ? solution[0] !== 'none'
                    ? solution.map((s, n) => 
                        <MathJax 
                        MathJaxOptions={opt}
                        html={String.raw`$$\color{#fff}{\Large{
                            x_${n + 1} = ${getParsedSol(s)}
                        }}$$`}
                        style = {styleMath}
                        key={n}
                    />
                        )
                    : <Text style={styles.p}>Корни не найдены</Text>
                : <View></View>                
            }
        </View>   
    )
}

export default LatexOut