import React from 'react'
import './SideBar.css';

function handleClick(){
    console.log('Button was clicked')
}
function SideBar(){
    return (
        <div className='sidebar'>
            <button onClick={handleClick}>
                Button
            </button>
            <a href='https://beta.reactjs.org/learn/responding-to-events' target="_blank">Learn React
            <img src='https://i.imgur.com/7vQD0fPs.jpg'/>
            </a>
        </div>
    )
}
export default SideBar;