/* Package */
import React from "react";
import styled from "styled-components";

/* Components */
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
      <Title>Todo List</Title>
      <TodoList />
      <TodoForm />
    </>
  );
};

const Title = styled.h1``;
export default TodoPage;
