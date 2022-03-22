import React from "react";
import Todo from "./todo";

const TodoContainer = (props) => {
  const todos = props.todos.map((todo, idx) => {
    return <Todo text={todo.text} />;
  });
  return (
    <div className="todo-container">
      <div className="todo-box-header">
        <h3>Add a todo!</h3>
        <input />
      </div>
      {todos}
    </div>
  );
};

export default TodoContainer;
