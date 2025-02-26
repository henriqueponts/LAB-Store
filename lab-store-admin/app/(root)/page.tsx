import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
    return (
        
      <div className="flex items-center justify-center h-screen">
        <SignIn/>
        <Button size="default" variant="destructive">Click Me</Button>
      </div>
    );
  }
  