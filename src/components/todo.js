import React from "react";

const Todo = (props) => {
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
    <div className="todo-wrapper">
      <p className="todo-text">{props.text}</p>
      <div className="todo-btn-wrapper">
        <button className="btn todo-button btn-green" onClick={onClick}>
          Mark as complete
        </button>
        <button className="btn todo-button btn-yellow">Edit</button>
      </div>
    </div>
  );
};

export default Todo;
