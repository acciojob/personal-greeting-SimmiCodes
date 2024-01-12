import React, { useState } from "react";
import './../styles/App.css';


const handleClick = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    setName(input);
  };

  return (
    <div>
      <p>Enter your name: </p>
      <input type="text" onChange={(event) => setInput(event.target.value)} />
   
      {name ? <p>Hello {name}!</p> : ""}  
    </div>
  );
};

export default handleClick;