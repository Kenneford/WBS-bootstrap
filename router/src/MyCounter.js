
import React from 'react'
import Count from './Count'

export default function MyCounter({count1, setCount1, count2, setCount2, count3, setCount3, IncreaseAll, DecreaseAll}) {

    
  return (
    <div>
        <Count />
        <div>
            <h1>My Counter 1</h1>
            <p>{count1}</p>
            <button onClick={() =>setCount1(count1 + 1)}>+</button>
            <button onClick={() =>setCount1(count1 - 1)}>-</button>
        </div>
        <div>
        <h1>My Counter 2</h1>
            <p>{count2}</p>
            <button onClick={() =>setCount2(count2 + 1)}>+</button>
            <button onClick={() =>setCount2(count2 - 1)}>-</button>
        </div>
        <div>
        <h1>My Counter 3</h1>
            <p>{count3}</p>
            <button onClick={() =>setCount3(count3 + 1)}>+</button>
            <button onClick={() =>setCount3(count3 - 1)}>-</button>
        </div>
        <h1>Count All</h1>
        <div>
            {/* <p>{IncreaseAll}</p>
            <p>{DecreaseAll}</p> */}
            <button onClick={IncreaseAll}>+</button>
            <button onClick={DecreaseAll}>-</button>
        </div>
    </div>
  )
}