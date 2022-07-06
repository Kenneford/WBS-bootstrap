import React, {useState} from 'react'
import './SideBar.css';

function handleClick(){
    console.log('Button was clicked')
}
function SideBar(){
    const [count, setCount] = useState(0)
const countClicked = ()=>{
    setCount(count + 1)
}

    return (
        <div className='sidebar'>
            <button onClick={handleClick}>
                Button
            </button>
            <div>
                <a href='https://beta.reactjs.org/learn/responding-to-events' target="_blank">Learn React
                <img src='https://i.imgur.com/7vQD0fPs.jpg'/>
                </a>
            </div>
            <div>
                You clicked on a button {count} times
            </div>
            <button onClick={countClicked}>
                Click Me
            </button>
        </div>
    )
}
export default SideBar;