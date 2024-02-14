import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Signin = () => {
  return (
    <div className=" flex items-center justify-center">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default Signin;
