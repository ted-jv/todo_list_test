import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { api } from "../../shared/apis/Apis";

// Components
import Button from "../common/Button";

const SignInForm = () => {
  const navigate = useNavigate();
  const [password, setpassword, setPasswordValue] = useInput("");
  const [email, setEmail, setEmailValue] = useInput("");

  const postfecher = async (e) => {
    e.preventDefault();
    const response = await api.post("/auth/signin", {
      email,
      password,
    });
    return response;
    // console.log(response);
  };

  const { mutate: onPost } = useMutation(postfecher, {
    onSuccess: (res) => {
      //   console.log("로그인 성공", res);
      localStorage.setItem("login-token", res.data.access_token);
      navigate("/todo");
    },
    onError: () => {
      alert("아이디 및 패스워드 다시 입력해주세요!");
    },
  });
  return (
    <>
      <form>
        <div>
          Email:
          <input type="email" value={email} onChange={setEmail} />
        </div>
        <div>
          Password:
          <input type="password" value={password} onChange={setpassword} />
        </div>
        <Button onClick={onPost}>로그인</Button>
        <Button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
