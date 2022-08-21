/* Package */
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";

/* Apis */
import { apiToken } from "../../shared/apis/Apis";

/* Components */
import Button from "../common/Button";

const Todo = ({ id, todo, isCompleted }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoData, setTodoData] = useInput("");
  const queryClient = useQueryClient();

  // UseMutation delete 함수
  const deleteFecher = async (todoId) => {
    const response = await apiToken.delete(`/todos/${todoId}`);
    // return response?.data;
  };

  // UseMutation delete
  const { mutate: onDelete } = useMutation(deleteFecher, {
    onSuccess: () => {
      alert("삭제 완료!");
      queryClient.invalidateQueries("todoData");
    },
  });

  const putFecher = async (todoId) => {
    const response = await apiToken.put(`/todos/${todoId}`, {
      todo: todoData,
      isCompleted: isCompleted,
    });
  };
  // UseMutation write 데이터 put
  const { mutate: onPut } = useMutation(putFecher, {
    onSuccess: () => {
      queryClient.invalidateQueries("todoData");
      alert("수정 완료!");
    },
    onError: (err) => {
      alert("수정 실패!");
    },
  });

  return (
    <>
      <div>
        {isEdit ? (
          <>
            <input placeholder={todo} onChange={setTodoData}></input>
            <Button
              width="100px"
              height="30px"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              취소
            </Button>
            <Button
              width="100px"
              height="30px"
              onClick={() => {
                onPut(id);
                setIsEdit(!isEdit);
              }}
            >
              완료
            </Button>
          </>
        ) : (
          <>
            <span>{todo}</span>
            <span>{isCompleted ? " = 완료" : " = 진행중"}</span>
            <Button
              width="100px"
              height="30px"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              수정하기
            </Button>
            <Button
              width="100px"
              height="30px"
              onClick={() => {
                // console.log(value.id);
                // window.confirm("삭제하시겠습니까?");
                onDelete(id);
              }}
            >
              삭제하기
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default Todo;
