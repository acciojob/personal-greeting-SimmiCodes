import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div htmlFor="nameInput">Enter your name:</div>
      <input type="text" id="nameInput" value={name} onChange={handleChange} placeholder="Your Name" />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default Greeting;
