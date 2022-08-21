/* Package */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* Components */
import SignUpForm from "../components/signUp/SignUpForm";

const SignUpPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("login-token")) {
      navigate("/todo");
    }
  }, []);
  return (
    <>
      <Title>회원가입</Title>
      <SignUpForm />
    </>
  );
};
const Title = styled.h1``;

export default SignUpPage;
