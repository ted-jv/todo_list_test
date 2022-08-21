/* Package */
import React from "react";
import styled from "styled-components";

/* Components */
import SignUpForm from "../components/signUp/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <Title>회원가입</Title>
      <SignUpForm />
    </>
  );
};
const Title = styled.h1``;

export default SignUpPage;
