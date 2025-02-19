import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Home from "./components/FunctionalComponent/Home";
import About from "./components/FunctionalComponent/About";
import Form from "./components/FunctionalComponent/Form";
import Gallery from "./components/FunctionalComponent/Gallery";
import Skills from "./components/FunctionalComponent/Skills";
import Navbar from "./components/FunctionalComponent/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={<Home properties="sjit" sjit="Hello"></Home>}
          ></Route>
          <Route
            path="/frontend/src/components/FunctionalComponent/About.jsx"
            element={<About></About>}
          ></Route>
          <Route
            path="/frontend/src/components/FunctionalComponent/Form.jsx"
            element={<Form></Form>}
          ></Route>
          <Route
            path="/frontend/src/components/FunctionalComponent/Gallery.jsx"
            element={<Gallery></Gallery>}
          ></Route>
          <Route
            path="/frontend/src/components/FunctionalComponent/Skills.jsx"
            element={<Skills></Skills>}
          ></Route>
        </Routes>
      </BrowserRouter>

      <Home properties="sjit" sjit="Hello"></Home>
      <hr></hr>
      <About></About>
      <hr></hr>
      <Form></Form>
      <hr></hr>
      <Gallery></Gallery>
      <hr></hr>
      <Skills></Skills>
      <hr></hr>
    </main>
  );
}
export default App;
