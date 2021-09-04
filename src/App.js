import React, { useState } from "react";
import './App.css';
import Message from "./Message";

function App() {
  const [inputText, setInputText] = useState(""); 
  return (
    <div className="App">
      <input value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <Message name="input" message={inputText}/>      
      </div>
  );
}

export default App;