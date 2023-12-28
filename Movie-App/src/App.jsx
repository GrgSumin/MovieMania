import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import Title from "./Components/Title";
import Watching from "./Components/Watching";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/movie" element={<MovieList />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/watch" element={<Watching />} />
        <Route path="/status" element={<Status />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
