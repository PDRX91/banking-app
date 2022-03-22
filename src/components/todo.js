import React from "react";

const Todo = (props) => {
  return (
    <div className="todo-wrapper">
      <p className="todo-text">{props.text}</p>
      <div className="todo-btn-wrapper">
        <button className="btn todo-button btn-green">Mark as complete</button>
        <button className="btn todo-button btn-yellow">Edit</button>
      </div>
    </div>
  );
};

export default Todo;
