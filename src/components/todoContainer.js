import React, { useState, useEffect } from "react";
import Todo from "./todo";
import TodoInput from "./todoInput";
import getRandomInt from "../utils/math";

const TodoContainer = (props) => {
  const [todos, setTodos] = useState(props.todos);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      { text, isCompleted: false, id: getRandomInt(250000) },
    ];
    setTodos(newTodos);
  };

  const handleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      // console.log(todo);
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setTodos(newTodos);
    // console.log("Todo to be completed:", todos[id]);
  };

  return (
    <div className="todo-container">
      <div className="todo-box-header">
        <TodoInput addTodo={addTodo} />
      </div>
      {todos.map((todo, idx) => {
        return (
          <Todo
            text={todo.text}
            key={idx}
            id={todo.id}
            isCompleted={todo.isCompleted}
            handleComplete={handleComplete}
          />
        );
      })}
    </div>
  );
};

export default TodoContainer;
