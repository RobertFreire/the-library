import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { GlobalTheme } from "./styles/GlobalTheme";
import Home from "./pages/TheLibrary/Home";
import TheLibrary from "./pages/TheLibrary";

function App() {
  return (
    <>
      <GlobalTheme />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<TheLibrary />} />
      </Routes>
    </>
  );
}

export default App;
