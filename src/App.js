import React from "react";

import Header from "./components/header";
import TodoContainer from "./components/todoContainer";
import "./App.css";
import getRandomInt from "./utils/math";

function App() {
  const todoData = [
    { text: "todo 1", isCompleted: false, id: getRandomInt(250000) },
    { text: "todo 2", isCompleted: false, id: getRandomInt(250000) },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Header user="Ted" />
        <TodoContainer todos={todoData}>Learn React</TodoContainer>
      </header>
    </div>
  );
}

export default App;
