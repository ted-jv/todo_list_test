import React from "react";
import styled from "styled-components";

const TodoList = () => {
  return (
    <>
      <Container>
        <p>투두리스트</p>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 500px;
  height: 500px;
`;

export default TodoList;
