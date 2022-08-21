import { Route, Routes, useNavigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

//Components
import TodoPage from "./pages/TodoPage";

function App() {
  const navigate = useNavigate();
  // if (loginCheck) {
  //   navigate("/todo");
  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
