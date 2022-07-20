

import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'


function Hello() {
  useEffect(()=>{
    return () => {
      alert("You are logged-out");
    };
}, [])
  return (
    <h1>Bye</h1>
  );
}

export default Hello;

