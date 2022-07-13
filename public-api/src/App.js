import {useState, useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() =>{
    const loadExchangeRate = async () =>{
      const result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      const dataReceived = await result.json()
      console.log(dataReceived)
      setExchangeRateData(dataReceived)
    }
    console.log("Start loading data")
    loadExchangeRate()
  }, [])
  const [exchangeRateData, setExchangeRateData] = useState({})
  if(!exchangeRateData.time){
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Exchange Rate</h1>
      <div>
        Updated: {exchangeRateData.time.updated}
      </div>
      <div>{exchangeRateData.chartName}</div>
      <div>
        {Object.keys(exchangeRateData.bpi).map((currency) => {
            return(
                <div key={currency}>
                    {currency}: {exchangeRateData.bpi[currency].rate}
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default App;
