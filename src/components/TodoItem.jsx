import React from "react";

const TodoItem = ({ todo, OnToggle, OnDelete }) => {
  return (
    <li>
      <p>{todo.title}</p>
      <p>{todo.createdAt.toLocaleString()}</p>
      <button
        onClick={() => {
          OnToggle(todo.id);
        }}
      >
        {todo.completed === true ? "완료" : "취소"}
      </button>
      <button
        onClick={() => {
          OnDelete(todo.id);
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
