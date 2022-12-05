import React from 'react'
import useCalculation from '../context/context'

function Display() {

  const { firstNum, ac, formula, result } = useCalculation()

  return (
    <div id='displayWrap'>
      <div id="display">
      {firstNum.length === 0 && ac}  
      {formula.length !== 0 && result === false ? formula: ""}
      {result === true && firstNum} 
      </div>
    </div>
  )
}

export default Display
