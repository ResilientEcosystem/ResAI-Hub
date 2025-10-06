"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Github, ExternalLink, Users, Info, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"
import { useTheme } from "../hooks/useTheme"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "solid" | "darker-gradient" | "subtle-pattern"
}

export function Footer({ className, variant = "darker-gradient", ...props }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  // Background classes based on variant and theme
  const getBgClass = () => {
    if (isDarkMode) {
      switch (variant) {
        case "solid":
          return "bg-[#0f0a1e]" // Solid dark color that's slightly darker than the end of your site gradient
        case "darker-gradient":
          return "bg-gradient-to-b from-[#170a28] to-[#0a0517]" // Continues from where your site ends to even darker
        case "subtle-pattern":
          return "bg-[#120920]" // Base color with pattern added via the decorative elements
        default:
          return "bg-gradient-to-b from-[#170a28] to-[#0a0517]"
      }
    } else {
      switch (variant) {
        case "solid":
          return "bg-[#f8f9fa]" // Light solid color
        case "darker-gradient":
          return "bg-gradient-to-b from-[#f5f7fb] to-[#e8ecf0]" // Light gradient
        case "subtle-pattern":
          return "bg-[#f0f2f5]" // Light base color
        default:
          return "bg-gradient-to-b from-[#f5f7fb] to-[#e8ecf0]"
      }
    }
  }

  return (
    <footer
      className={cn(
        "relative mt-auto w-full overflow-hidden border-t py-10",
        isDarkMode 
          ? "border-white/10 text-white" 
          : "border-gray-200 text-gray-800",
        getBgClass(),
        className,
      )}
      {...props}
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* Logo Section */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <a href="/" className="inline-block">
              <img 
                src="New.png" 
                alt="Logo" 
                className={cn(
                  "h-24 w-90 transition-transform duration-75 hover:scale-110",
                  !isDarkMode && "filter brightness-0"
                )} 
              />
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "text-sm",
              isDarkMode ? "text-gray-400" : "text-gray-600"
            )}
          >
            Made with <Heart className="inline h-4 w-4 text-pink-500" fill="#ec4899" /> @ UC Davis
          </motion.p>
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          <FooterLink href="https://github.com/Bismanpal-Singh/Res-AI" icon={<Github />}>
            GitHub
          </FooterLink>
          <FooterLink href="/tools" icon={<ExternalLink />}>
            Our Tools
          </FooterLink>
          <FooterLink href="/authors" icon={<Users />}>
            Meet the team
          </FooterLink>
          <FooterLink href="https://expolab.resilientdb.com/" icon={<Info />}>
            About Us
          </FooterLink>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn(
            "text-center text-xs",
            isDarkMode ? "text-gray-500" : "text-gray-600"
          )}
        >
          <p>© {currentYear} ExpoLab. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Decorative Elements - Adjusted for better integration */}
      {variant === "subtle-pattern" ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl"></div>
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl"></div>
          {variant === "solid" && (
            <>
              <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
              <div className="absolute bottom-0 left-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
            </>
          )}
        </div>
      )}
    </footer>
  )
}

interface FooterLinkProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  className?: string
}

function FooterLink({ href, icon, children, className }: FooterLinkProps) {
  const isExternal = href.startsWith("http")
  const { isDarkMode } = useTheme()

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-75 hover:shadow-lg hover:shadow-purple-500/10",
        isDarkMode 
          ? "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
          : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-800",
        className,
      )}
    >
      <span className="transition-transform duration-75 group-hover:-translate-y-0.5 group-hover:scale-110">
        {icon}
      </span>
      <span className="transition-transform duration-75 group-hover:-translate-y-0.5">{children}</span>
    </a>
  )
}
