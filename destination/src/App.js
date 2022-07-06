import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [newDestination, setNewDestination] = useState('');
  const [destinations, setDestination] = useState([]);

  const onInputChange = (event) =>{
    setNewDestination(event.target.value) // Targeted input field value!
  }
  const addDestination = () =>{
    setDestination(prev => [newDestination, ...prev])
    setNewDestination('') // Function to clear the input field for new entry!
  }
  return (
    <div className="App">
      <h1>My Travel Destinations</h1>
      <div>
        <input value={newDestination} onChange={onInputChange}/>
        <button onClick={addDestination}>Add</button>
      </div>
      <ul>
        {destinations.map((destination, i) => (
          <li key={i}>{destination}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
