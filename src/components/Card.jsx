import React, { useState } from 'react'

function Card() {
    const [count,setCount] = useState(0)

    const plus = ()=>{
        setCount(count+1)
    }
    const mines = ()=>{
        if(count>0){
        setCount(count-1)}
    }

    const reset = ()=>{
        setCount(0)
    }

  return (
    <div className='card'>
        <div className="card-head">
            <p>الحمدلله</p>
        </div>
        <div className="card-body">
            <div className="card-count">
                <div className="number">{count}</div>
            </div>
            <div className="card-operations">
                <button className="plus" onClick={plus}>+</button>
                <button className="mines" onClick={mines}>-</button>
            </div>

            <div className="card-footer">
                <button onClick={reset}> اعادة الضبط</button>
            </div>
        </div>
    </div>
  )
}

export default Card