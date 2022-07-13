import React from "react";
import LeftPane from "./LeftPane";
import './App.css';
import RightPane from "./RightPane";

function App() {
  return (
    <div className="layout">
      <LeftPane />
      <RightPane />
    </div>
  );
}

export default App;
