import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TrianglesBackground from "./components/DynamicBG";
import Landing from "./pages/LandingPage";
import { Footer } from "./components/footer";

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Animated background */}
        <TrianglesBackground />
        {/* Main content (pages) */}
          {/* <div className="relative z-10 pt-16">  Use after NavBar is added*/} 
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Home" element={<HomePage />} />
          </Routes>
        {/* </div> */}
      </div>
      <Footer variant="solid" />
    </Router>
  );
}

export default App;
