
import React, { useState } from "react";
import './../styles/App.css';
import { event } from "cypress/types/jquery";

const App = () => {
  const[input, setInput]=useState("");
  return (
    <div>
      <P>Enter your name: </P>
      <input type="text" onChange={(event)=>setInput(event.target.value)}/>


      {input ? <p>Hello {input}!</p> : ""}  
    </div>
  );
};

export default App
