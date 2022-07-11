import HomePage from "pages/Home";
import LoginPage from "pages/Login";
import NotFoundPage from "pages/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Private from "routes/Private";
import Public from "routes/Public";
import "styles/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Private children={<HomePage />} />}></Route>
      <Route
        path="/login"
        element={<Public children={<LoginPage />} />}
      ></Route>
      <Route path="*" element={<Private children={<NotFoundPage/>} />} />
    </Routes>
  );
}

export default App;
