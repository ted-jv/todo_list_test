/* Package */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";

/* Components */
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("login-token");
    navigate("/");
  };
  return (
    <>
      <Head>
        <Title>Todo List</Title>
        <Button
          width="100px"
          height="30px"
          onClick={() => {
            onLogout();
          }}
        >
          로그아웃
        </Button>
      </Head>
      <TodoList />
      <TodoForm />
    </>
  );
};

const Head = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h1``;
export default TodoPage;
