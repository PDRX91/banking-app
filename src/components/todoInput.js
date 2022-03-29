import React, { useState } from "react";

const TodoInput = (props) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = () => {
    props.addTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="input-container">
      <h3>Add a todo!</h3>
      <div className="input-wrapper">
        <input
          className="input"
          placeholder="Add a task..."
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button className="submit-btn btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
