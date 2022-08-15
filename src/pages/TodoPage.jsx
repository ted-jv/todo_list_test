import React from "react";
// Components
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";

const TodoPage = () => {
  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  );
};

export default TodoPage;
