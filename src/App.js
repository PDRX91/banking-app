import React from "react";

import Header from "./components/header";
import TodoContainer from "./components/todoContainer";
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

  const todoData = [{ text: "todo 1" }, { text: "todo 2" }];

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
