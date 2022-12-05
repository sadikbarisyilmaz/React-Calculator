import React, { useState, useContext } from 'react'
import { createContext } from 'react'

const CalculationContext = createContext()

export const CalculationProvider = ({ children }) => {

    const [ac, setAc] = useState("0")
    const [firstNum, setFirstNum] = useState([])
    const [secondNum, setSecondNum] = useState([])
    const [formula, setFormula] = useState([])
    const [operator, setOperator] = useState([])
    const [decimalUsed, setDecimalUsed] = useState(false)
    const [result, setResult] = useState(false)
    const [equalsPressed, setEqualsPressed] = useState(false)

    const handleNum = (event) => {

        if (equalsPressed === true) {
            setFirstNum([event.target.value])
            setEqualsPressed(false)
        } else if (event.target.value === "." && decimalUsed === false && secondNum.length === 0) {
            setDecimalUsed(true)
            setFirstNum([firstNum + event.target.value])

        } else if (event.target.value !== "." && decimalUsed === true && secondNum.length !== 0) {
            setDecimalUsed(true)
            setSecondNum([secondNum + event.target.value])
            setFormula([...formula, event.target.value])

        } else if (decimalUsed === true && event.target.value === ".") {
            return
        } else if (event.target.value === "." && decimalUsed === false) {
            setDecimalUsed(true)
            setSecondNum([secondNum + event.target.value])
            setFormula([...formula, event.target.value])
        } else if (decimalUsed === true && event.target.value === ".") {
            return
        } else if (event.target.value === "0" && secondNum[0] === "0") {
            return
        } else if (formula.length > 1 && secondNum.length === 0) {
            setSecondNum([event.target.value])
            setFormula([...formula, event.target.value])
        } else if (formula.length > 1 && secondNum.length === 1) {
            setSecondNum([secondNum + event.target.value])
            setFormula([...formula, event.target.value])
        } else if (event.target.value === "0" && firstNum[0] === "0") {
            return
        } else if (firstNum.length === 0) {
            setFirstNum([event.target.value])
            setFormula([event.target.value])

        } else {
            setFirstNum([firstNum + event.target.value])
            setFormula([firstNum + event.target.value])
        }
    }

    const handleOperator = (event) => {
        if (secondNum[0] === "-") {
            setOperator([event.target.value])
            setSecondNum([])
            setFormula([...formula, event.target.value])
        } else if (secondNum.length !== 0) {
            operatorCalculation()
            setSecondNum([])
            setOperator([event.target.value])
            setFormula([...formula, event.target.value])
            setDecimalUsed(false)
            setResult(false)
            setEqualsPressed(false)

        } else {

            setOperator([event.target.value])
            setFormula([...firstNum, event.target.value])
            setDecimalUsed(false)
            setResult(false)
            setEqualsPressed(false)

        }

    }

    const handleMinus = (event) => {
        if (secondNum.length === 0 && operator.length !== 0) { ////////////////
            setSecondNum([event.target.value])
            setFormula([...formula, event.target.value])
            setDecimalUsed(false)
            setResult(false)
            setEqualsPressed(false)
        } else

            if (firstNum.length === 0) {
                setFirstNum([event.target.value])
                setFormula([firstNum + event.target.value])
                setResult(false)
                setEqualsPressed(false)

            } else if (secondNum.length !== 0) {
                operatorCalculation()
                setSecondNum([])
                setOperator([event.target.value])
                setFormula([...formula, event.target.value])
                setDecimalUsed(false)
                setResult(false)
                setEqualsPressed(false)

            } else {
                setOperator([event.target.value])
                setFormula([...firstNum, event.target.value])
                setDecimalUsed(false)
                setResult(false)
                setEqualsPressed(false)
            }
    }


    const operatorCalculation = () => {

        if (secondNum.length > 0) {

            if (operator[0] === "+") {
                setFirstNum([parseFloat(firstNum) + parseFloat(secondNum)])
            } else if (operator[0] === "/") {
                setFirstNum([parseFloat(firstNum) / parseFloat(secondNum)])
            } else if (operator[0] === "*") {
                setFirstNum([parseFloat(firstNum) * parseFloat(secondNum)])
            } else if (operator[0] === "-") {
                setFirstNum([parseFloat(firstNum) - parseFloat(secondNum)])
            }
            setSecondNum([])

        } else {
            return
        }
    }

    const equals = () => {

        if (secondNum.length > 0) {
            if (operator[0] === "+") {
                setFirstNum([parseFloat(firstNum) + parseFloat(secondNum)])
            } else if (operator[0] === "/") {
                setFirstNum([parseFloat(firstNum) / parseFloat(secondNum)])
            } else if (operator[0] === "*") {
                setFirstNum([parseFloat(firstNum) * parseFloat(secondNum)])
            } else if (operator[0] === "-") {
                setFirstNum([parseFloat(firstNum) - parseFloat(secondNum)])
            }
            setSecondNum([])
            setResult(true)
            setOperator([])
            setFormula([])
            setEqualsPressed(true)
        } else {
            return
        }
    }


    const clear = () => {
        setAc(0)
        setFormula([])
        setFirstNum([])
        setSecondNum([])
        setOperator([])
        setDecimalUsed(false)
    }

    const values = {
        firstNum,
        secondNum,
        operator,
        handleNum,
        handleOperator,
        equals,
        clear,
        ac,
        handleMinus,
        formula,
        result
    }

    return <CalculationContext.Provider value={values}>{children}</CalculationContext.Provider>

}

const useCalculation = () => useContext(CalculationContext)
export default useCalculation
