import { SignUp } from "@clerk/clerk-react";
const Signup = () => {
  return (
    <div className=" flex items-center justify-center">
      <SignUp signInUrl={"/sign-in"} path="/sign-up" routing="path" redirectUrl="/" />
    </div>
  );
};

export default Signup;
