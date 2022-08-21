import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
  // const loginCheck = localStorage.getItem("login-token");
  // const navigate = useNavigate();
  // console.log("loginCheck", loginCheck);
  // if (!loginCheck) {
  //   navigate("/");
  // }
  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  );
};

export default TodoPage;
