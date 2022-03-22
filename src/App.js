import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const onClick = () => {
    fetch("http://localhost:3001/api/tasks/1")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log("SUCCESS", result.tasks);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <button className="App-link" onClick={onClick}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
