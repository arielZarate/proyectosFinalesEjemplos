import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import About from "./views/About/About";

function App() {
  return (
    <div className="min-vh-100 font">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/addVideogame" element={<Form />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
