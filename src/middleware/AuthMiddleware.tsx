 import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
 
export default function AuthMiddleware({ children }) {
    const { isSignedIn} = useUser();
   
    if (!isSignedIn) {
        return <Navigate to="/sign-in" />;
    }
    else
    return children;
   
  }