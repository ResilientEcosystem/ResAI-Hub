import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TrianglesBackground from "./components/DynamicBG";
import Landing from "./pages/LandingPage";
import { NavbarDemo } from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Animated background */}
        <TrianglesBackground />
        {/* Main content (pages) */}
        {/* <div className="relative z-50">
          <NavbarDemo />
        </div> */}
        {/* <div className="relative z-10 pt-16"> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Home" element={<HomePage />} />
          </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
