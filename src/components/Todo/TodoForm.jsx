/* Package */
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";

/* Apis */
import { apiToken } from "../../shared/apis/Apis";
import Button from "../common/Button";

const TodoForm = () => {
  const [todoData, setTodaData, setTodoValue] = useInput("");
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

      // console.log("할 일 추가 성공!", res);
      setTodoValue("");
    },
    onError: () => {
      alert("내용을 입력해주세요!");
    },
  });
  return (
    <>
      <input
        value={todoData}
        onChange={setTodaData}
        placeholder="할 일을 추가해주세요."
      />
      <Button
        width="100px"
        height="30px"
        onClick={() => {
          onPost();
        }}
      >
        추가하기
      </Button>
    </>
  );
};

export default TodoForm;
