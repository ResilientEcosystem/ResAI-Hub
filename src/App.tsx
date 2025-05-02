import { NavbarDemo } from "./components/NavBar";
import Home from "./pages/LandingPage";
import TrianglesBackground from "./components/DynamicBG";

function App() {
  return (
    <div className="relative">
      {/* Animated background */}
      <TrianglesBackground />
      {/* <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white">
      <NavbarDemo />
    </div> */}
      {/* Main content (pages) */}
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}

export default App;
