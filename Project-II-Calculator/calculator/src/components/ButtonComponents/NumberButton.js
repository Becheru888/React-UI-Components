import React from 'react';
import './Button.css';
import Button from './Button'


const numbers = [['clear'],[7,8,9,4,5,6,1,2,3],[0]]
const symbols = ['÷','×','−','+','=']




function NumbersButtons(props) {
    return (
        <div className="key-board">
            <div className='numbers'>   
            {numbers[0].map(button => <Button class={button} key={button}  text={button}/>)}
            {numbers[1].map(number => <Button class='number' key={number}  text={number}/>)}
            {numbers[2].map(zero =>   <Button class='zero' key={zero}  text={zero}/>)}
            </div>
            <div className='symbols'>
            {symbols.map(symbol => <button key={symbol} className='symbol'>{symbol}</button>)}
            </div>
        </div>
        
    )
}







export default NumbersButtons
