import React, { useState, useEffect } from "react";
import Todo from "./todo";
import TodoInput from "./todoInput";

const TodoContainer = (props) => {
  const [todos, setTodos] = useState(props.todos);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-box-header">
        <TodoInput addTodo={addTodo} />
      </div>
      {todos.map((todo, idx) => {
        return <Todo text={todo.text} key={idx} />;
      })}
    </div>
  );
};

export default TodoContainer;
