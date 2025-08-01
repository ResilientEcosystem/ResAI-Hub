import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/Home"
import TrianglesBackground from "./components/DynamicBG"
import Landing from "./pages/LandingPage"
import { Footer } from "./components/footer"
import { Navbar } from "./components/NavBar"
import { PerformanceOptimizer } from "./components/PerformanceOptimizer"

// Wrapper component to conditionally render the navbar
function AppContent() {
  const location = useLocation()
  const isLandingPage = location.pathname === "/"

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#0d1117] to-[#170a28]">
      {/* Only show navbar on non-landing pages */}
      {!isLandingPage && <Navbar />}

      <div className="relative flex-1">
        {/* Animated background - conditionally rendered based on performance */}
        <PerformanceOptimizer>
          <TrianglesBackground />
        </PerformanceOptimizer>

        {/* Main content (pages) */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/tools" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
          </Routes>
        </div>
      </div>

      <Footer variant="solid" />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
