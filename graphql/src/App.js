import './App.css';
import {useState, useEffect} from 'react'
import Countries from './Countries';

function App() {
    const {countries, setCountries} = useState([])

    async function loadCountries(){
        const options = {
                  method: "post",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                            query: `
                            {continent(code: "AF"){
                                name,
                                countries{
                                    code,
                                    name,
                                    capital
                                }
                            }}`
                          })
    }
    const response = await fetch(`https://countries.trevorblades.com/`, options)
    const result = await response.json()
    setCountries((result.data.continent?.countries || []))
}

    useEffect(()=>{
        loadCountries()
    }, [countries])

  return (
    <div className="App">
        <div id="countries-search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          autoComplete="off"
        />
        <button >Enter</button>
      </div>
      <Countries countries={countries} continent="Africa"/>
    </div>
  );
}


export default App;
