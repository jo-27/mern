import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
 import './App.css'
import Home from "./components/FunctionalComponent/Home";
import About from "./components/FunctionalComponent/About";
import Form from "./components/FunctionalComponent/Form";
import Gallery from "./components/FunctionalComponent/Gallery";
import Skills from "./components/FunctionalComponent/Skills";
import Navbar from "./components/FunctionalComponent/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home properties="sjit" sjit="Hello"/>}
          />
          <Route
            path="/about"
            element={<About/>}
          />
          <Route
            path="/form"
            element={<Form/>}
          />
          <Route
            path="/gallery"
            element={<Gallery/>}
          />
          <Route
            path="/skills"
            element={<Skills/>}
          />
          <Route
            path="/use-effect"
            element={<UseEffect/>}
          />
        </Routes>
      </BrowserRouter>      
    </main>
  );
}
export default App;
