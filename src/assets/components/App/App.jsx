import React from "react";
import './App.css'
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Blogs from "../Blogs/Blogs";
import { Routes, Route } from "react-router";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import SignUpPage from "../SignUpPage/SignUpPage";
export default function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signup-page" element={<SignUpPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );   
}
