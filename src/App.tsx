import React, { useEffect, useMemo, useState } from "react";
import { GetRepositoryList } from "./api/GitApi";
import { Repository } from "./api/interface/git";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Issue from "./pages/Issue";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/issue" element={<Issue />} />
    </Routes>
  );
}

export default App;
