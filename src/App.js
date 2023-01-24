import {  Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import ResetPassword from "./components/resetPassword/ResetPassword";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/reset" element={< ResetPassword />} />
    </Routes>
  );
}

export default App;
