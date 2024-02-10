import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
    const [name, setName] = useState("");
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
  return (
    <div>
        {/* Do not remove the main div */}
        <p htmlFor="nameInput">Enter your name:</p>
        <input type="text" id="nameInput" value={name} onChange={handleChange} placeholder="Your Name" />
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App