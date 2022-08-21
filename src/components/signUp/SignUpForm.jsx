/* Package */
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";

/* Apis */
import { api } from "../../shared/apis/Apis";

/* Components */
import Button from "../common/Button";

const SignUpForm = () => {
  const [email, setEmail, setEmailValue] = useInput("");
  const [password, setpassword, setPasswordValue] = useInput("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  //   console.log(email);
  //   console.log(password);
  const onKeyUp = () => {
    if (email.includes("@") && password.length >= 8) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const postfecher = async (e) => {
    e.preventDefault();
    setEmailValue("");
    setPasswordValue("");
    const response = await api.post("/auth/signup", {
      email,
      password,
    });
    return response;
    // console.log(response);
  };

  const { mutate: onPost } = useMutation(postfecher, {
    onSuccess: () => {
      alert("회원가입 성공");
      navigate("/");
    },
    onError: () => {
      alert("이미 존재하는 이메일입니다.");
    },
  });

  return (
    <>
      <form onSubmit={onPost}>
        <div>
          <span>Email : </span>
          <input
            type="email"
            value={email}
            onChange={setEmail}
            onKeyUp={onKeyUp}
          />
          <div>이메일 형식을 기입해주세요.</div>
        </div>
        <div>
          <span>Password : </span>
          <input
            type="password"
            value={password}
            minLength="8"
            onChange={setpassword}
            onKeyUp={onKeyUp}
          />
          <div>8자리 이상 기입해주세요.</div>
        </div>
        <Button type="submit" disabled={isDisabled}>
          회원가입
        </Button>
        <Button type="button" onClick={() => navigate("/")}>
          취소
        </Button>
      </form>
    </>
  );
};

export default SignUpForm;
