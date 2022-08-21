import React, { memo } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { apiToken } from "../../shared/apis/Apis";

const TodoList = () => {
  const getfecher = async () => {
    const response = await apiToken.get("/todos");
    return response.data;
  };

  const { data: todoData } = useQuery("todoData", getfecher, {
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
          return <div key={value.id}>{value.todo}</div>;
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
