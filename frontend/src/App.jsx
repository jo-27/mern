import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
 import './App.css'
import Home from "./components/FunctionalComponent/Home";
import About from "./components/FunctionalComponent/About";
import Contact from "./components/FunctionalComponent/Contact";
import Gallery from "./components/FunctionalComponent/Gallery";
import Skills from "./components/FunctionalComponent/Skills";
import Navbar from "./components/FunctionalComponent/Navbar";
import Signup from "./components/FunctionalComponent/Signup";
import Login from "./components/FunctionalComponent/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect";
import UseState from "./components/FunctionalComponent/Hooks/UseState";
import UseEffectAPI  from "./components/FunctionalComponent/Hooks/UseEffectAPI";
import UseRef from "./components/FunctionalComponent/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponent/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponent/Hooks/UseCallback";
import UseMemoize from "./components/FunctionalComponent/Hooks/UseMemoize"
import HoC from "./components/FunctionalComponent/Hoc/Hoc";

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
            path="/contact"
            element={<Contact/>}
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
          <Route
            path="/signup"
            element={<Signup/>}
          />
          <Route
            path="/Login"
            element={<Login/>}
          />
          <Route
            path="/UseState"
            element={<UseState/>}
          />
          <Route
            path="/UseEffectAPI"
            element={<UseEffectAPI/>}
          />
          <Route
            path="/UseRef"
            element={<UseRef/>}
          />
          <Route
            path="/UseMemo"
            element={<UseMemo/>}
          />
          <Route
            path="/UseCallback"
            element={<UseCallback/>}
          />
          <Route
            path="/UseMemoize"
            element={<UseMemoize/>}
          />
          <Route
            path="/HoC"
            element={<HoC/>}
          />
        </Routes>
      </BrowserRouter>      
    </main>
  );
}
export default App;
