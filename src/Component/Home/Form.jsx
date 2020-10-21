import React, { useState } from "react";

function Form({ addTodo }) {
  const [todo, settodo] = useState({
    content: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.content.length > 1) {
      addTodo(todo);
      settodo({
        content: " ",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>add Todo:</span>
      <input
        value={todo.content}
        onChange={(e) => settodo({ content: e.target.value })}
      />
    </form>
  );
}

export default Form;
