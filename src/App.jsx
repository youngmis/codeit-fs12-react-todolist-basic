import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할일",
      completed: true,
      createdAt: new Date("2026-03-18T12:00:00.000Z"),
    },
    {
      id: 2,
      title: "할일2",
      completed: false,
      createdAt: new Date("2026-03-18T12:00:00.000Z"),
    },
  ]);

  const workingTodos = todos.filter((todo) => todo.completed === false);
  const doneTodos = todos.filter((todo) => todo.completed === true);
  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      completed: false,
      createdAt: new Date(),
    };
    return setTodos((todos) => [...todos, newTodo]);
  };

  function OnToggle(id) {
    const newTodos = todos.map((todo2) => {
      if (todo2.id == id) {
        return { ...todo2, completed: !todo2.completed };
      } else {
        return todo2;
      }
    });
    setTodos(newTodos);
  }
  function OnDelete(id) {
    const newTodos = todos.filter((todo2) => todo2.id !== id);
    setTodos(newTodos);
  }
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAdd={onAdd} />

      <br />
      <h2>🔥 Working</h2>
      <ul>
        {workingTodos.map((todo) => (
          <TodoItem todo={todo} OnToggle={OnToggle} OnDelete={OnDelete} />
        ))}
      </ul>

      <br />
      <h2>✅ Done</h2>
      <ul>
        {doneTodos.map((todo) => (
          <TodoItem todo={todo} OnToggle={OnToggle} OnDelete={OnDelete} />
        ))}
      </ul>
    </>
  );
}

export default App;
