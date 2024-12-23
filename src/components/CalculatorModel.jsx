import './CalculatorModel.css'
import { useState } from 'react'


function CalculatorModel() {
    const [currentValue, setCurrentValue] = useState("0")
    const [prevValue, setPrevValue] = useState(null)
    const [operator, setOperator] = useState(null)
    
    const handleNumberClick = (value) => {
        setCurrentValue(currentValue === "0" ? value : currentValue + value)
    }

    const handleOperatorClick = (oper) => {
        setPrevValue(currentValue)
        setCurrentValue("0")
        setOperator(oper)
    }

    const handleClear = () => {
        setCurrentValue("0")
        setPrevValue(null)
        setOperator(null)
    }
    const calculate = () => {
        if (prevValue === null || operator === null) return 

        const prevV = parseFloat(prevValue)
        const currentV = parseFloat(currentValue)
        let result

        switch(operator) {
            case "+":
                result = prevV + currentV
                break
            case "-":
                result = prevV - currentV
                break
            case "*": 
                result = prevV * currentV
                break
            case "/": 
                result = currentV !== 0 ? prevV / currentV : "Error"
                break
            default:
                return
        }

        setCurrentValue(String(result))
        setPrevValue(null)
        setOperator(null)
    }


  return (
    <div className="calculator-layout">
        <div className='display'>{currentValue}</div>
        <br />
            <button onClick={handleClear} className='clear'>C</button>
        <div className='buttons'>
            {[1, 2 , 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <button key={num} onClick={() => handleNumberClick(String(num))} className='numbers'>{num}</button> 
            ))}
        </div>

            <div className='operators'>
                {["+", "-", "*", "/"].map((oper) => (
                    <button key={oper} onClick={() => handleOperatorClick(oper)} className='operatorNum'>{oper}</button>
                ))}
            </div>
            <button onClick={calculate} className='result'>=</button>
    </div>
  )
}

export default CalculatorModel;