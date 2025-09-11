import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-gradient-to-b from-[#0d1117] to-[#170a28]">
      {/* Floating Shapes Background */}
      <motion.div
        className="absolute -top-32 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Error Code */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-purple-500 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Main Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-2xl font-semibold text-gray-200"
      >
        Lost in the universe 🌌
      </motion.p>

      {/* Sub Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-2 text-lg text-gray-400 max-w-lg"
      >
        The page you are looking for doesn’t exist or might have been moved.
        Don’t worry, let’s get you back on track!
      </motion.p>

      {/* Suggestions */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 space-y-2 text-gray-300"
      >
        <li className="flex items-center justify-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          Try checking the URL again
        </li>
        <li className="flex items-center justify-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          Search for what you need
        </li>
        <li className="flex items-center justify-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          Or just head back home 🚀
        </li>
      </motion.ul>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-10"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 
               font-semibold 
               rounded-xl shadow-lg
               bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
               text-white hover:text-white focus:text-white active:text-white"
        >
          <Home className="w-5 h-5 text-white" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
