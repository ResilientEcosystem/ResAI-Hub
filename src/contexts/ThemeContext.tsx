import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const root = document.documentElement
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark
    setIsDarkMode(shouldUseDark)
    root.classList.toggle("dark", shouldUseDark)
  }, [])

  // Handle theme change side effects (DOM class + persistence + smooth transition)
  useEffect(() => {
    const root = document.documentElement
    root.classList.add("theme-transition")
    root.classList.toggle("dark", isDarkMode)
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    const timeout = window.setTimeout(() => {
      root.classList.remove("theme-transition")
    }, 50) // Ultra fast transition - almost instant
    return () => window.clearTimeout(timeout)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
