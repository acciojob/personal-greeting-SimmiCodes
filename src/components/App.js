import React, { useState } from "react";
import './../styles/App.css';

const handleClick = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p htmlFor="nameInput">Enter your name:</p>
      <input type="text" id="nameInput" value={name} onChange={handleChange} placeholder="Your Name" />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default handleClick;
