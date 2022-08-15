import React from "react";
// Hooks
import { useRef } from "react";
import { useState } from "react";

const TodoForm = () => {
  const [todoData, setTodaData] = useState("");
  const todoRef = useRef(null);
  console.log("렌더링 일어남");
  console.log(todoData);
  const handleClick = () => {
    console.log("핸들이벤트");
    console.log(todoData);
    todoRef.current.value = "";
  };
  return (
    <>
      <input ref={todoRef} placeholder="오늘의 할일은?" />
      <button
        onClick={() => {
          setTodaData(todoRef.current.value);
          handleClick();
          todoRef.current.focus();
        }}
      >
        추가하기
      </button>
    </>
  );
};

export default TodoForm;
