"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { cn } from "../lib/utils"
import { Link, useLocation } from "react-router-dom"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Handle scroll effect for condensing
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Navigation items with their routes
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/Home" },
    { name: "About", path: "/about" },
  ]

  return (
    <motion.nav
      className={cn("fixed left-0 right-0 top-0 z-50 flex items-center px-4 md:px-6", className)}
      initial={{ y: -100 }} // Start off-screen
      animate={{
        y: 0, // Animate to visible
        height: scrolled ? "3.5rem" : "5rem", // Bigger default size, same condensed size
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        y: { duration: 0.5 }, // Slightly longer duration for the entry animation
      }}
    >
      {/* Background - darker by default, even darker when scrolled */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-300 backdrop-blur-md",
          scrolled
            ? "bg-gradient-to-r from-[#080a10]/95 via-[#0a0613]/95 to-[#080a10]/95" // Even darker when scrolled
            : "bg-gradient-to-r from-[#0a0d13]/90 via-[#0e0818]/90 to-[#0a0d13]/90", // Dark by default (what was previously the scrolled state)
        )}
      >
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* Logo */}
      <motion.div
        className="relative z-10 mr-6 flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link to="/">
          <img
            src="New.png"
            alt="Logo"
            className={cn("transition-all duration-300", scrolled ? "h-7 w-auto" : "h-10 w-auto")} // Larger logo initially
          />
        </Link>
      </motion.div>

      {/* Beta Version Indicator */}
      <motion.div
        className="relative z-10 mr-6 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 text-xs font-medium text-purple-300 border border-purple-500/30 backdrop-blur-sm">
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse"></span>
          Beta - Under Development
        </span>
      </motion.div>

      {/* Navigation Buttons - Desktop */}
      <div className="hidden md:flex">
        {navItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <motion.button
              className={cn(
                "relative mx-1 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors",
                scrolled ? "py-2" : "py-3", // Taller buttons initially
                location.pathname === item.path ? "bg-white/10 text-white" : "text-gray-300 hover:text-white",
              )}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">{item.name}</span>
              {location.pathname === item.path && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          </Link>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right Side Elements */}
      <div className="flex items-center space-x-2">
        {/* ResilientDB Link Button */}
        <motion.a
          href="https://resilientdb.apache.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center rounded-full bg-white/5 text-gray-300 backdrop-blur-lg transition-colors hover:bg-white/10 hover:text-white",
            scrolled ? "h-10 px-4" : "h-12 px-5", // Larger button initially
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Visit ResilientDB"
        >
          <span className="text-sm font-medium">ResilientDB</span>
        </motion.a>

        {/* Theme Toggle */}
        <motion.button
          className={cn(
            "flex items-center justify-center rounded-full bg-white/5 text-gray-300 backdrop-blur-lg transition-colors hover:bg-white/10 hover:text-white",
            scrolled ? "h-10 w-10" : "h-12 w-12", // Larger button initially
          )}
          onClick={() => setIsDarkMode(!isDarkMode)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDarkMode ? "dark" : "light"}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? <Moon size={scrolled ? 20 : 24} /> : <Sun size={scrolled ? 20 : 24} />}{" "}
              {/* Larger icon in both states */}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className={cn(
            "flex items-center justify-center rounded-full bg-white/5 text-gray-300 backdrop-blur-lg transition-colors hover:bg-white/10 hover:text-white md:hidden",
            scrolled ? "h-10 w-10" : "h-12 w-12", // Larger button initially
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileMenuOpen ? "open" : "closed"}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={scrolled ? 20 : 24} /> : <Menu size={scrolled ? 20 : 24} />}{" "}
              {/* Larger icon in both states */}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute inset-x-0 top-16 z-20 bg-[#0d1117]/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link to={item.path} key={item.name}>
                  <motion.button
                    className={cn(
                      "my-1 rounded-lg px-4 py-3 text-left text-sm font-medium text-white transition-colors",
                      location.pathname === item.path ? "bg-white/10 text-white" : "text-gray-300 hover:text-white",
                    )}
                    onClick={() => {
                      setMobileMenuOpen(false)
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
