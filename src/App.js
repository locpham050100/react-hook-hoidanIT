import logo from "./logo.svg";
import "./App.css";

import Nav from "./views/Nav";

import { useState } from "react";

const App = () => {
  let [name, setName] = useState("Caphe");

  const [address, setAddress] = useState("");

  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "loc1",
    },
    { id: "todo2", title: "loc2" },
    { id: "todo3", title: "loc3" },
  ]);

  const handleEventClick = (e) => {
    if (!address) {
      alert("emtpy input");
      return;
    }
    let newTodo = { id: "1", title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
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
        <div className="todos-container">
          {todos.map((todo) => {
            console.log(">>>>>> list: ", todo);
            return (
              <li key={todo.id} className="todo-child">
                {todo.title}
              </li>
            );
          })}
        </div>
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
