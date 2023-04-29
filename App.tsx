import { StatusBar } from 'expo-status-bar';
import React,{useState, useMemo} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {styles} from './App.style';
import {Equation} from './models/Equation'
import {Parser} from './models/utils/Parser'
import EquatInp from './components/EquatInp/EquatInp';
import Header from './components/header/Header';
import LiveInp from './components/LiveInp/LiveInp';
import LatexOut from './components/LatexOut/LatexOut';
import StepByStep from './components/StepByStep/StepByStep';
import Keyboard from './components/keyboard/Keyboard';



export default function App() {
    let [equationInp, setEquationInp] = useState('');
    let [parsedTexEq, setParsedTexEq] = useState('');
    let [solution, setSolution] = useState<Array<any>>([]);
    let [step, setStep] = useState<Array<any>>([]);
    let [isKeyb, setIsKeyb] = useState(false);
    let parser = new Parser();


    useMemo(() => {
          const parsed = parser.parseTex(equationInp)
            if(parsed){
              setParsedTexEq(parsed)
          }
          if(solution){
              setSolution([])
              setStep([])
          }
        }, [equationInp]
    )

    function solve(): void{
        const equation = new Equation(equationInp);
        const [sol, stBySt] = equation.solve();

        setStep(stBySt)
            if(!sol[0]){
                sol.push('none')
            }
        setSolution(sol)
    }

    function getParsedSol(s: any){
        return parser.parseTex(s.toString())
    }
    const keyDown = (key: string) => {
		switch (key){

			case 'sqrt()':
				setEquationInp(equationInp + 'sqrt(');
				break;
			case 'c':

				setEquationInp('');
				break;

			case '<-':
				setEquationInp(equationInp.slice(0, -1));
				break;

			default:
				setEquationInp(equationInp + key)
		}
	}



return (
    <View style={styles.App}>
        <ScrollView style={styles.wrapper}>
            <View style={styles.cont}>
                <Header />
                <EquatInp equatStr={equationInp} setEquationInp={setEquationInp} solve={solve} />
                <View style={styles.out}>
                    <LiveInp parsedTexEq={parsedTexEq}/>
                    <LatexOut getParsedSol={getParsedSol} solution={solution}/>
                    <StepByStep stepArr={step} solutions={solution} getParesedSol={getParsedSol}/> 
                </View>
            </View>
        </ScrollView>
        <Keyboard keyDown={keyDown}/>
        <StatusBar hidden />
    </View>
  );
}


