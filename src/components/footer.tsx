"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Github, ExternalLink, Users, Info, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "solid" | "darker-gradient" | "subtle-pattern"
}

export function Footer({ className, variant = "darker-gradient", ...props }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  // Background classes based on variant
  const getBgClass = () => {
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
  }

  return (
    <footer
      className={cn(
        "relative mt-auto w-full overflow-hidden border-t border-white/10 py-10 text-white",
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
              <img src="New.png" alt="Logo" className="h-24 w-90 transition-transform duration-300 hover:scale-110" />
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-gray-400"
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
          <FooterLink href="/about" icon={<Info />}>
            About Us
          </FooterLink>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-gray-500"
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

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-purple-500/10",
        className,
      )}
    >
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
        {icon}
      </span>
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5">{children}</span>
    </a>
  )
}
