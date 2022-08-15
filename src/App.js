import { Route, Routes } from "react-router-dom";

//Components
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
