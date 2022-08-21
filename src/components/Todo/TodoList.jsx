/* Package */
import React, { memo } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

/* Apis */
import { apiToken } from "../../shared/apis/Apis";

/* Components */
import Todo from "./Todo";

const TodoList = () => {
  const getFecher = async () => {
    const response = await apiToken.get("/todos");
    return response.data;
  };

  const { data: todoData } = useQuery("todoData", getFecher, {
    onSuccess: (res) => {
      // console.log("데이터 get 성공!", res);
    },
    onError: () => {
      // console.log("데이터 get 실패!");
    },
  });
  // console.log(todoData);
  return (
    <>
      <Container>
        {todoData?.map((value) => {
          return (
            <Todo
              key={value.id}
              id={value.id}
              todo={value.todo}
              isCompleted={value.isCompleted}
            />
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 600px;
`;

export default memo(TodoList);
