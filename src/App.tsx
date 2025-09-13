import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/Home"
import ToolsPage from "./pages/ToolsPage"
import TrianglesBackground from "./components/DynamicBG"
import Landing from "./pages/LandingPage"
import NotFound from "./pages/NotFound"
import { Footer } from "./components/footer"
import { Navbar } from "./components/NavBar"
import { ThemeProvider } from "./contexts/ThemeContext"

// Wrapper component to conditionally render the navbar
function AppContent() {
  const location = useLocation()
  const isLandingPage = location.pathname === "/"

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[var(--app-gradient-start)] to-[var(--app-gradient-end)]">
      {/* Only show navbar on non-landing pages */}
      {!isLandingPage && <Navbar />}

      <div className="relative flex-1">
        {/* Animated background - conditionally rendered based on performance */}
        <TrianglesBackground />

        {/* Main content (pages) */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <Footer variant="solid" />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
