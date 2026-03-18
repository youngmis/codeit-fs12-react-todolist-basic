import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newTodos = [...todos, { onAdd }];
        setTodos(newTodos);
        setTitle("");
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
