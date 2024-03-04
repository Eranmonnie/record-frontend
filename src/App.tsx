// import {Button} from "../components/ui/button"
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { ThemeProvider } from "./components/themeProvider";

const App = () => {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const navigate = useNavigate();

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }
  return (
    <>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        navigate={(to) => navigate(to)}
      >
        {/* <div className={cn(
          font.className,
          "bg-white dark:bg-[#313338")
          }> */}
          <ThemeProvider defaultTheme="dark" storageKey="discord-theme">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SignedIn>
                      <Home />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              />
              <Route path="/sign-in" element={<Signin />} />
              <Route path="/sign-up" element={<Signup />} />
            </Routes>
          </ThemeProvider>
        {/* </div> */}
      </ClerkProvider>
    </>
  );
};

export default App;
