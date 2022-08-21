/* Package */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* Components */
import SignInForm from "../components/signIn/SignInForm";

const SignInPage = () => {
  const loginCheck = localStorage.getItem("login-token");
  const navigate = useNavigate();
  // console.log("loginCheck", loginCheck);
  if (loginCheck) {
    navigate("/todo");
  }
  return (
    <>
      <Title>로그인</Title>
      <SignInForm />
    </>
  );
};
const Title = styled.h1``;
export default SignInPage;
