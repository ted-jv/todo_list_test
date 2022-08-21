import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

// Components
import useInput from "../../hooks/useInput";
import { api } from "../../shared/apis/Apis";
import Button from "../common/Button";

const SignUpForm = () => {
  const [email, setEmail, setEmailValue] = useInput("");
  const [password, setpassword, setPasswordValue] = useInput("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  //   console.log(email);
  //   console.log(password);
  const onSubmit = (e) => {
    e.preventDefault();
    setEmailValue("");
    setPasswordValue("");
  };
  const onKeyUp = () => {
    if (email.includes("@") && password.length >= 8) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const postfecher = async () => {
    const response = await api.post("/auth/signup", {
      email: email,
      password: password,
    });
    return response;
    // console.log(response);
  };

  const { mutate: onPost } = useMutation(postfecher, {
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {
      alert("이미 존재하는 아이디 입니다.");
    },
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          Email:
          <input
            type="email"
            value={email}
            onChange={setEmail}
            onKeyUp={onKeyUp}
          />
        </div>
        <div>
          Password:
          <input
            type="password"
            value={password}
            minLength="8"
            onChange={setpassword}
            onKeyUp={onKeyUp}
          />
        </div>
        <Button type="submit" disabled={isDisabled} onClick={onPost}>
          회원가입
        </Button>
      </form>
    </>
  );
};

export default SignUpForm;
