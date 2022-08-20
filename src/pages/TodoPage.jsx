import React from "react";
// Components
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  );
};

export default TodoPage;
