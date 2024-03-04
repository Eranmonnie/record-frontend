import { useEffect, useState } from "react";
import getAuthenticatedAxiosInstance from "@/axiosInstance";
import { ModeToggle } from "@/components/toggle";
import { UserButton, useUser } from "@clerk/clerk-react";

const Home = () => {
  const [user, setUser] = useState("Loading..."); // Initial state set to "Loading..."
  const clerkUser = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosInstance = await getAuthenticatedAxiosInstance(clerkUser.user);
        const response = await axiosInstance.get("/hello");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUser("Error fetching data");
      }
    };

    fetchData();
  }, [clerkUser.user]);

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
      <div>{user.name}</div> {/* Render user state */}
    </div>
  );
};

export default Home;
