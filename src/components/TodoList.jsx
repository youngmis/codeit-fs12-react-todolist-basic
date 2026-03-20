import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, OnToggle, OnDelete }) => {
  {
    return todo.map((todo) => (
      <TodoItem todo={todo} OnToggle={OnToggle} OnDelete={OnDelete} />
    ));
  }
};

export default TodoList;
