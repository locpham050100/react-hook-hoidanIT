import logo from "./logo.svg";
import "./App.css";

import Nav from "./views/Nav";

import { useState } from "react";

const App = () => {
  let [name, setName] = useState("Caphe");

  const [address, setAddress] = useState("");

  const handleEventClick = (e) => {
    setName(address);
    console.log(address);
  };

  const handleOnchangeInput = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lộc Lộc Cute thích {name} !</h1>
        <input
          type="text"
          value={address}
          onChange={(e) => handleOnchangeInput(e)}
        />
        <button type="button" onClick={(e) => handleEventClick(e)}>
          Click me!
        </button>
      </header>
    </div>
  );
};

export default App;
