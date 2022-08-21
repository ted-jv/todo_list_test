import React from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/signIn/SignInForm";

const SignInPage = () => {
  const loginCheck = localStorage.getItem("login-token");
  const navigate = useNavigate();
  console.log("loginCheck", loginCheck);
  if (loginCheck) {
    navigate("/todo");
  }
  return (
    <>
      <SignInForm />
    </>
  );
};

export default SignInPage;
