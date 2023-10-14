import React from 'react'
import { useState } from 'react'
export default function CounterComp() {
    const [text, setText] = useState(0);
    const [count, setCount] = useState(0);

    const handleClickAdd = () =>{
        setText(text + 1);
    }
    const handleClickSub = () =>{
        setText(text - 1);
    }
    const handleClickReset = () =>{
        setText(count);
    }

  return (
    <div>
       <h1>CounterApp</h1>
        <div className='txtbx'>
            <h1>{text}</h1>
        </div>

        <div className='button'>
            <button className='btn1' onClick={handleClickAdd}>
                <i className='fa-solid fa-btn1'></i>+</button>
            <button className='btn2' onClick={handleClickSub}>
                <i className='fa-solid fa-btn2'></i>-</button>
            <button className='btn3' onClick={handleClickReset}>
                <i className='fa-solid fa-btn3'></i>Reset</button>
        </div>
    </div>


  )
}
