"use client";
import { motion } from "motion/react";

export function HeroSectionOne() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
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
          ResAI is the home for our next-generation AI tools on ResilientDB. 
          Browse, test, and experience the latest in distributed AI innovation.

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
          <button className="w-60 transform rounded-lg bg-purple-800 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Get Started with ResAI
          </button>
        </motion.div>
      </div>
    </div>
  );
}

