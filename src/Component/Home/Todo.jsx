import React from "react";

function Todo({ todos, deleteTodo }) {
  const todo = todos.map((todo) => (
    <div key={todo.id}>
      <p>{todo.content}</p>
      <span onClick={() => deleteTodo(todo.id)}>Delete</span>
    </div>
  ));

  const result = todos.length ? (
    todo
  ) : (
    <h3 className="todo-empty">Todo is empty</h3>
  );

  return <>{result}</>;
}

export default Todo;
