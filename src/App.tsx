// import {Button} from "../components/ui/button"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
      <h1>lemvklemrlk</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App