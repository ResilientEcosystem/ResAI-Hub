"use client";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function HeroSectionOne() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-purple-200 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Empowering AI Innovation on ResilientDB"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        {/* Light blue neon line positioned under the main heading */}
        <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-gray-300"
        >
          ResAI unlocks next-gen AI on ResilientDB — browse, test, and experience data and intelligence working together.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1.5,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://resilientdb.apache.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Check Out ResilientDB
          </button>
          </a>
          <Link to="/Home">
          <button className="w-60 transform rounded-lg bg-purple-800 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Get Started with ResAI
          </button>
          </Link>
        </motion.div>

        {/* Tool Buttons */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1.8,
          }}
          className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://nexus.resilientdb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="transform rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500/20 hover:border-purple-500/50">
              Nexus
            </button>
          </a>
          <a
            href="https://beacon.resilientdb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="transform rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/20 hover:border-cyan-500/50">
              Beacon
            </button>
          </a>
          <a
            href="https://contractforge.resilientdb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="transform rounded-lg border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-500/20 hover:border-pink-500/50">
              ContractForge
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

