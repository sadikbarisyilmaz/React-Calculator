import React from 'react'
import useCalculation from '../context/context'

function Numpad() {

const {handleNum, handleOperator, equals, clear, handleMinus} = useCalculation()


  return (
    <div id='numpad'>
      <button id="clear" className='lg ac' onClick={clear}>AC</button>
      <button value="/" onClick={handleOperator} id="divide" className='sm op'>/</button>
      <button value="*" onClick={handleOperator} id="multiply" className='sm op'>x</button>

      <button value="7" onClick={handleNum} id="seven" className='sm'>7</button>
      <button value="8" onClick={handleNum} id="eight" className='sm'>8</button>
      <button value="9" onClick={handleNum} id="nine" className='sm'>9</button>
      <button value="-" onClick={handleMinus} id="subtract" className='sm op'>-</button>

      <button value="4" onClick={handleNum} id="four" className='sm'>4</button>
      <button value="5" onClick={handleNum} id="five" className='sm'>5</button>
      <button value="6" onClick={handleNum} id="six" className='sm'>6</button>
      <button value="+" onClick={handleOperator} id="add" className='sm op'>+</button>

      <button value="1" onClick={handleNum} id="one" className='sm'>1</button>
      <button value="2" onClick={handleNum} id="two" className='sm'>2</button>
      <button value="3" onClick={handleNum} id="three" className='sm'>3</button>
      <button value="." onClick={handleNum} id="decimal" className='sm dec'>.</button>

      <button value="0" onClick={handleNum} id="zero" className='lg'>0</button>
      <button id="equals" className='lg eq' value="=" onClick={equals}>=</button>

    </div>
  )
}

export default Numpad



