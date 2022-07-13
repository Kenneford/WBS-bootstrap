import React from 'react'
import { useState } from 'react'
import MyCounter from './MyCounter'

export default function Count() {
    const [count1, setCount1] =useState(0)
    const [count2, setCount2] =useState(0)
    const [count3, setCount3] =useState(0)

    const IncreaseAll = () =>{
        setCount1(count1 + 1)
        setCount2(count2 + 1)
        setCount3(count3 + 1)
    }
    const DecreaseAll = () =>{
        setCount1(count1 - 1)
        setCount2(count2 - 1)
        setCount3(count3 - 1)
    }
  return (
    <>
    <MyCounter count1={count1} setCount1={setCount1} 
               count2={count2} setCount2={setCount2}
               count3={count3} setCount3={setCount3}
               IncreaseAll={IncreaseAll}
               DecreaseAll={DecreaseAll}
               useState={useState()} />
    </>
  )
}
