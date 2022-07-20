import './App.css'
import React from 'react'
import Hello from './Hello'
import {useEffect, useState} from 'react'

export default function App() {
  const [login, setLogin] = useState(false)
  
console.log(login)
    useEffect(()=>{
        alert('Hello')
    }, [])
  return (
    <div className="App">
      <button onClick={() =>setLogin(prev=>!prev)}>{login? "Logged-out" : "Logged-in"}</button>
      {login && <Hello />}
    </div>
  );
}