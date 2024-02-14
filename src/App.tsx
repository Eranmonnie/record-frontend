// import {Button} from "../components/ui/button"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";


const App = () => {
  return (
    <>
      <h1>lemvklemrlk</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App