import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const mongodbHost = "http://localhost:6000";

function App() {
  const [dest, setDest] = useState("");

  const mongoHost = async () => {
    const data = await fetch(`${mongodbHost}/api/destination`);
    const result = await data.json();
    console.log(result);
    setDest(result);
  };

  useEffect(() => {
    mongoHost();
  }, []);

  return (
    <div className="App">
      {/* {dest.map((desti, id) => {
        return <div>{desti.country}</div>;
      })} */}
    </div>
  );
}

export default App;
