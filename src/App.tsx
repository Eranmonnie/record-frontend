// import {Button} from "../components/ui/button"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AuthMiddleware from "./middleware/AuthMiddleware";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthMiddleware>
              <Home />
            </AuthMiddleware>
          }
        />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
