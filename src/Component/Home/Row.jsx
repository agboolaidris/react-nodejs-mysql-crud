import React, { useState } from "react";
import Todo from "./Todo";
import Form from "./Form";

function Row() {
  const [TodoList, setTodoList] = useState([
    { id: 1, content: "I wanna Travel to Abuja" },
    { id: 2, content: "I wanna to Study" },
  ]);

  const addTodo = (todo) => {
    todo.id = Math.random();
    let Contents = [...TodoList, todo];
    setTodoList(Contents);
  };

  const deleteTodo = (id) => {
    let contents = TodoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(contents);
  };
  return (
    <div className="row">
      <h2>Todo App</h2>
      <Todo todos={TodoList} deleteTodo={deleteTodo} />
      <Form addTodo={addTodo} />
    </div>
  );
}

export default Row;
