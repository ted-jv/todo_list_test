import React from "react";
// Hooks
import { useRef } from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { apiToken } from "../../shared/apis/Apis";

const TodoForm = () => {
  const [todoData, setTodaData, setTodoValue] = useInput("");
  const navigate = useNavigate();
  const todoRef = useRef(null);
  const queryClient = useQueryClient();
  // console.log("렌더링 일어남");
  // console.log(todoData);
  // const handleClick = () => {
  //   setTodaData(todoRef.current.value);
  //   onPost();
  // };

  const postfecher = async () => {
    const response = await apiToken.post("/todos", {
      todo: todoData,
    });
    return response;
  };

  const { mutate: onPost } = useMutation(postfecher, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("todoData");

      console.log("할일 추가 성공!", res);
      setTodoValue("");
    },
    onError: () => {
      alert("할일 추가 실패!");
    },
  });
  return (
    <>
      <input
        value={todoData}
        onChange={setTodaData}
        placeholder="할일을 추가해주세요."
      />
      <button
        onClick={() => {
          // handleClick();
          onPost();
          // todoRef.current.focus();
        }}
      >
        추가하기
      </button>
    </>
  );
};

export default TodoForm;
