/* Package */
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";

/* Apis */
import { api } from "../../shared/apis/Apis";

/* Components */
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
    onError: (res) => {
      console.log(res);
      if (res.response.data.statusCode == 404) {
        alert("존재하지 않는 아이디입니다.");
      } else {
        alert("아이디 및 비밀번호를 다시 확인해주세요.");
      }
    },
  });
  return (
    <>
      <form>
        <div>
          <span>Email : </span>
          <input type="email" value={email} onChange={setEmail} />
          <div>이메일 형식을 기입해주세요.</div>
        </div>
        <div>
          <span>Password : </span>
          <input type="password" value={password} onChange={setpassword} />
          <div>8자리 이상 기입해주세요.</div>
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
