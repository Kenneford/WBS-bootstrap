import React from 'react';

const MyCounter = (props) =>{
    return(
        <div>
            <div>
                <h1>Counter 1</h1>
                <div className="input">{props.counter}</div>
                <button onClick={() =>props.setCounter((prev) => prev + 1)}className="add-btn">+</button>
                <button onClick={() =>props.setCounter((prev) => prev - 1)}className="subtruct-btn">-</button>
            </div>
            {/* <div>
                <h1>Counter 2</h1>
                <input type="text" value={numberCount2} onChange={handleOnChange2} id="input"/>
                <button onClick={AddCounter2} className="add-btn">+</button>
                <button onClick={SubtractCounter2} className="subtruct-btn">-</button>
            </div>
            <div>
                <h1>Counter 3</h1>
                <input type="text" value={numberCount3} onChange={handleOnChange3} id="input"/>
                <button onClick={AddCounter3} className="add-btn">+</button>
                <button onClick={SubtractCounter3} className="subtruct-btn">-</button>
            </div> */}
        </div>
    )
}
export default MyCounter