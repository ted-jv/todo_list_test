/* Package */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* Components */
import SignInForm from "../components/signIn/SignInForm";

const SignInPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("login-token")) {
      navigate("/todo");
    }
  }, []);
  return (
    <>
      <Title>로그인</Title>
      <SignInForm />
    </>
  );
};
const Title = styled.h1``;
export default SignInPage;
