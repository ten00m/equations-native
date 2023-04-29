import { View, Text } from "react-native";
import {styles, styleMath} from './StepByStep.style'
import { FC } from "react";
import MathJax from 'react-native-mathjax'
import {opt} from '../../MathJaxOpt'

interface StepByStepProps {
    stepArr: Array<any>,
    solutions: Array<any>,
    getParesedSol: (s: any) => string
}


const StepByStep: FC<StepByStepProps> = ({stepArr, solutions, getParesedSol}) => {
    const checkNothingP = (step: string) => {
        if(step){
            return <Text style={styles.p}>{step}</Text>
        }
    }

    const checkNothingMath = (step: string) => {
        if(step){
            return <MathJax
                html={String.raw`$$\color{#fff}{\Large{${step}}}$$`}
                MathJaxOption={opt}
                style={styleMath}
            />
        }
    }



    return (
        <View style={styles.cont}>
            <Text style={stepArr.length !== 0 ? styles.h : {display: 'none'}}>
                Пошаговое решение
            </Text>
            {
                stepArr.map((step, key) => {
                    return (
                        <View style={styles.elem} key={key}>
                            {checkNothingP(step[0])}
                            {checkNothingMath(step[1])}
                        </View>
                    )
                })
            }
        </View>   
    )
}

export default StepByStep