import './App.css';
import {useEffect, useState} from 'react'
import Countries from './Countries';

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")
  const [continent, setContinent] = useState("")

  async function loadCountries() {
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `
        {continent(code: "${filter}") {
          name,
          countries {
            code,
            name,
            capital
          }
        }}        
        `
      })
    };
  
    const response = await fetch(`https://countries.trevorblades.com/`, options)
    const result = await response.json()
    setCountries((result.data.continent?.countries || [] ))
    setContinent((result.data.continent?.name || "" ))
  }
  useEffect(() => {
    loadCountries()
  }, [])
  return (
    <div className="App">
      <input value={filter} onChange={(event)=> {setFilter(event.target.value)}} />
      <button onClick={loadCountries}>Search</button>
      <Countries countries={countries} continent={continent} />
    </div>
  );
}

export default App;