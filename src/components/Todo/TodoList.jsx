import React, { memo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { apiToken } from "../../shared/apis/Apis";
import Button from "../common/Button";
import Todo from "./Todo";

const TodoList = () => {
  const [isEdit, setIsEdit] = useState(false);
  const queryClient = useQueryClient();

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
    // staleTime: 0,
    // cacheTime: 0,
  });
  console.log(todoData);
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
  width: 500px;
  height: 500px;
`;

export default memo(TodoList);
