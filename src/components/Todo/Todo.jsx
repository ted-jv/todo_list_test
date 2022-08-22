/* Package */
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

/* Apis */
import { apiToken } from "../../shared/apis/Apis";

/* Components */
import Button from "../common/Button";

const Todo = ({ id, todo, isCompletedd }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoData, setTodoData, setTodoValue] = useInput(todo);
  const [todoCheck, setIsCompleted] = useState(isCompletedd);
  const queryClient = useQueryClient();
  // UseMutation delete
  const deleteFecher = async (todoId) => {
    const response = await apiToken.delete(`/todos/${todoId}`);
  };

  const { mutate: onDelete } = useMutation(deleteFecher, {
    onSuccess: () => {
      alert("삭제 완료!");
      queryClient.invalidateQueries("todoData");
    },
  });

  const handleTodoCheck = () => {
    setTodoValue(todo);
    onPutTodoCheck();
  };

  // UseMutation TodoChange put
  const putTodoCheckFecher = async () => {
    const response = await apiToken.put(`/todos/${id}`, {
      todo: todoData,
      isCompleted: !todoCheck,
    });
  };
  const { mutate: onPutTodoCheck } = useMutation(putTodoCheckFecher, {
    onSuccess: () => {
      queryClient.invalidateQueries("todoData");
      setIsCompleted(!todoCheck);
      alert("수정 완료!");
    },
    onError: (err) => {
      alert("수정 실패!");
    },
  });

  // UseMutation put
  const putFecher = async () => {
    const response = await apiToken.put(`/todos/${id}`, {
      todo: todoData,
      isCompleted: isCompletedd,
    });
  };
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
      <Container>
        {isEdit ? (
          <>
            <input
              placeholder={todoData}
              value={todoData}
              onChange={setTodoData}
            ></input>
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
          <TodoWrap>
            <div>
              <span>{todo}</span>
            </div>
            <div>
              <Button width="100px" height="30px" onClick={handleTodoCheck}>
                {todoCheck ? "할 일 완료" : "할 일 진행중"}
              </Button>
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
                  if (window.confirm("삭제하시겠습니까?")) {
                    onDelete(id);
                  } else {
                    return;
                  }
                }}
              >
                삭제하기
              </Button>
            </div>
          </TodoWrap>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 50px;
`;

const TodoWrap = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
`;
export default Todo;
