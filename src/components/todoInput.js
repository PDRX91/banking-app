import React, { useState } from "react";

const TodoInput = (props) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="input-container">
      <h3>Add a todo!</h3>
      <form className="input-wrapper" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Add a task..."
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button type="submit" className="submit-btn btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
