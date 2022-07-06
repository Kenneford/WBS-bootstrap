import React, {useState, useEffect} from 'react';
import FavoriteColor from './FavoriteColor';
import MyCounter from './MyCounter';

function Counter(){
    const [count1, setCount1] = useState(0)
    const [numberCount1, setNumberCount1] = useState(0)

    const [count2, setCount2] = useState(0)
    const [numberCount2, setNumberCount2] = useState(0)

    const [count3, setCount3] = useState(0)
    const [numberCount3, setNumberCount3] = useState(0)

    const [counterTotals, setCounterTotals] = useState(0)

    useEffect(() => {
        setCounterTotals(() => count1 + count2 + count3)
    }, [count1, count2, count3]);

    // Count 1
    const handleOnChange1 = (e) => {
        setCount1(e.count1.value);
     }

    const AddCounter1 = () => {
        setNumberCount1(prev => prev + 1);
    }
    const SubtractCounter1 = () => {
        setNumberCount1(prev => prev - 1);
    }

    // Count 2
    const handleOnChange2 = (e) => {
        setCount2(e.target.value);
     }

    const AddCounter2 = () => {
        setNumberCount2(prev => prev + 1);
    }
    const SubtractCounter2 = () => {
        setNumberCount2(prev => prev - 1);
    }

    // Count 3
    const handleOnChange3 = (e) => {
        setCount3(e.target.value);
     }

    const AddCounter3 = () => {
        setNumberCount3(prev => prev + 1);
    }
    const SubtractCounter3 = () => {
        setNumberCount3(prev => prev - 1);
    }
    // const handleOnChange3 = (e) => {
    //     setCount3(e.target.value);
    //  }

    // const AddCounter3 = () => {
    //     setNumberCount3(prev => prev + 1);
    // }
    // const SubtractCounter3 = () => {
    //     setNumberCount3(prev => prev - 1);
    // }

    const IncreaseAll = () =>{
        setCount1(p => p + 1)
        setCount2(p => p + 1)
        setCount3(p => p + 1)
    }
    const DecreaseAll = () =>{
        setCount1(p => p - 1)
        setCount2(p => p - 1)
        setCount3(p => p - 1)
    }

    return(
        <div>
            {/* <div>
                <h1>Counter 1</h1>
                <p>{count1}</p>
                <input type="text" value={numberCount1} onChange={handleOnChange1} id="input"/>
                <button onClick={AddCounter1} className="add-btn">+</button>
                <button onClick={SubtractCounter1} className="subtruct-btn">-</button>
            </div> */}
            <MyCounter counter={count1} setCounter={setCount1}/>
            {/* <MyCounter counter2={count2} setCounter2={setCount2}/>
            <MyCounter counter3={count3} setCounter3={setCount3}/> */}
            <div>
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
            </div>
            <div>
                <h1>All Counters</h1>
                {/* <input type="text" value={AllCounters} onChange={handleChangeAll} id="input"/> */}
                <button onClick={IncreaseAll} className="add-btn">+</button>
                <button onClick={DecreaseAll} className="subtruct-btn">-</button>
            </div>
            <div>
                Total is: {counterTotals}
            </div>
            <FavoriteColor />
        </div>
    )
}
export default Counter;