import { ModeToggle } from "@/components/toggle";
import { UserButton } from "@clerk/clerk-react";


const Home = () => {
  return (
    <div>
      <UserButton 
      afterSignOutUrl="/"/>
      <ModeToggle />
    </div>
  );
};

export default Home;
