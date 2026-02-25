import AppRoutes from "./AppRoutes";
import Splash from "./components/ui/Splash";
import { useState } from "react";

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setSplashComplete(true);
  };

  // Show splash if not complete
  if (!splashComplete) {
    return <Splash onComplete={handleSplashComplete} />;
  }

  return <AppRoutes />;
}
