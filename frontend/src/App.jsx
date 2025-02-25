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
import HoC from "./components/FunctionalComponent/Hoc/HoCfile";
import Memo from "./components/FunctionalComponent/Hooks/UseMemo";
import Number from "./components/FunctionalComponent/memoization/Number";
import Text from "./components/FunctionalComponent/memoization/Text";
import LazyLoadingAndSuspense from "./components/FunctionalComponent/memoization/LazyLoadingAndSuspense";
import CoE from "./components/FunctionalComponent/ContextAPI/CoE";
import { UseContext } from './components/FunctionalComponent/Hooks/UseContext';



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
            path="/hoc"
            element={<HoC/>}
          />
          <Route
            path="/Memo"
            element={<Memo/>}
          />
          <Route
            path="/Number"
            element={<Number/>}
          />
          <Route
            path="/Text"
            element={<Text/>}
          />
          <Route
            path="/Lazy"
            element={<LazyLoadingAndSuspense/>}
          />
          <Route
            path="/CoE"
            element={
              <UseContext>
                <CoE />
              </UseContext>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;

// import { Suspense, lazy } from "react";
// const LazyComp = lazy(() => import("./components/FunctionalComponent/Signup"));
// function App() {
//   return (
//     <div>
//       <Suspense fallback={<h1>loading...</h1>}>
//         <h1>LazyLoadingAndSuspense</h1>
//         <LazyComp></LazyComp>
//       </Suspense>
//     </div>
//   );
// };

// export default App;
