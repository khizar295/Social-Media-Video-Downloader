import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Facebook from "./Components/Facebook";
import Instagram from "./Components/Instagram";
import Tiktok from "./Components/Tiktok";
import Youtube from "./Components/Youtube";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fbdownload" element={<Facebook />} />
          <Route path="/instadownload" element={<Instagram />} />
          <Route path="/tiktokdownload" element={<Tiktok />} />
          <Route path="/ytdownload" element={<Youtube />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
