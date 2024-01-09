import React, { useState } from 'react';

const GreetingComponent = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGreet = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button onClick={handleGreet}>Greet</button>
      <p>{greeting}</p>
    </div>
  );
};

export default GreetingComponent;
