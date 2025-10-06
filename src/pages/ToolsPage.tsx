import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

interface Tool {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  link: string;
  features: string[];
  useCases: string[];
  color: string;
}

const tools: Tool[] = [
  {
    id: "nexus",
    name: "Nexus",
    shortDescription: "Your intelligent gateway to ResilientDB's world. Explore consensus protocols, dive into research papers, and discover the innovations behind our database.",
    longDescription: "Nexus is an AI-powered research assistant that helps you navigate the complex world of ResilientDB. Whether you're a researcher, developer, or enthusiast, Nexus provides intelligent insights into consensus protocols, research papers, and the underlying innovations that power our high-performance blockchain database.",
    logo: "N", // Simple text-based logo
    link: "https://nexus.resilientdb.com/",
    features: [
      "AI-powered research assistance",
      "Consensus protocol exploration",
      "Research paper analysis",
      "Intelligent Q&A system",
      "Real-time insights"
    ],
    useCases: [
      "Understanding consensus mechanisms",
      "Research paper summarization",
      "Technical concept explanation",
      "Development guidance",
      "Academic research support"
    ],
    color: "from-purple-400 to-pink-500"
  },
  {
    id: "beacon",
    name: "Beacon",
    shortDescription: "Explore your documentation like never before — ask questions, dive deep, and connect directly to the underlying code.",
    longDescription: "Beacon transforms how you interact with documentation. It's an AI-powered documentation assistant that understands your codebase, answers your questions, and provides intelligent insights directly connected to your source code. Perfect for developers who want to understand complex systems quickly.",
    logo: "B", // Simple text-based logo
    link: "https://beacon.resilientdb.com/",
    features: [
      "AI-powered documentation search",
      "Code-aware Q&A",
      "Direct code linking",
      "Intelligent context understanding",
      "Multi-language support"
    ],
    useCases: [
      "Documentation exploration",
      "Code understanding",
      "Quick problem solving",
      "Learning new codebases",
      "Technical documentation"
    ],
    color: "from-indigo-400 to-cyan-500"
  },
  {
    id: "contractforge",
    name: "ContractForge",
    shortDescription: "Forge smart contracts with AI assistance. Design, deploy, and manage blockchain contracts with intelligent suggestions and automated testing.",
    longDescription: "ContractForge is your AI-powered smart contract development platform. It combines the power of artificial intelligence with blockchain technology to help you create, deploy, and manage smart contracts more efficiently. From initial design to deployment and testing, ContractForge streamlines the entire process.",
    logo: "C", // Simple text-based logo
    link: "https://contractforge.resilientdb.com/",
    features: [
      "AI-assisted contract design",
      "Automated testing",
      "Security analysis",
      "Deployment automation",
      "Contract management"
    ],
    useCases: [
      "Smart contract development",
      "DeFi protocol creation",
      "NFT contract deployment",
      "Security auditing",
      "Contract optimization"
    ],
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "coming-soon",
    name: "Coming Soon",
    shortDescription: "We're brewing up something exciting — stay tuned as we build the next chapter of our platform!",
    longDescription: "Our team is working hard on the next generation of AI-powered tools for the ResilientDB ecosystem. This new tool will bring cutting-edge capabilities to help developers and researchers push the boundaries of what's possible with blockchain technology.",
    logo: "★", // Star symbol for coming soon
    link: "https://github.com/ResilientEcosystem/ResAI-Hub",
    features: [
      "Innovative AI capabilities",
      "Advanced blockchain integration",
      "Next-gen user experience",
      "Cutting-edge technology",
      "Community-driven development"
    ],
    useCases: [
      "Future development",
      "Advanced research",
      "Next-generation applications",
      "Innovation exploration",
      "Technology advancement"
    ],
    color: "from-purple-400 to-blue-500"
  }
];

const ToolsPage = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--app-gradient-start)] to-[var(--app-gradient-end)] py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Our Tools
            </span>
          </h1>
          <p className={cn(
            "text-xl max-w-3xl mx-auto",
            isDarkMode ? "text-gray-300" : "text-gray-700"
          )}>
            Discover the complete suite of AI-powered tools designed to enhance your experience with ResilientDB and blockchain technology.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              className={cn(
                "backdrop-blur-lg rounded-xl p-6 border cursor-pointer group transition-all duration-75 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20",
                isDarkMode 
                  ? "bg-white/5 border-white/10 hover:bg-white/10" 
                  : "bg-white/80 border-gray-200 hover:bg-white/90"
              )}
              onClick={() => setSelectedTool(tool)}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                  {tool.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">
                    <span className={`bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`}>
                      {tool.name}
                    </span>
                  </h3>
                  <p className={cn(
                    "leading-relaxed",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}>
                    {tool.shortDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={cn(
                "border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative",
                isDarkMode 
                  ? "bg-[#0d1117] border-white/20" 
                  : "bg-white border-gray-200"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTool(null)}
                className={cn(
                  "absolute top-4 right-4 transition-colors z-10",
                  isDarkMode 
                    ? "text-gray-400 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-start space-x-6 mb-8">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${selectedTool.color} flex items-center justify-center text-3xl font-bold text-white shadow-lg`}>
                    {selectedTool.logo}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4">
                      <span className={`bg-gradient-to-r ${selectedTool.color} bg-clip-text text-transparent`}>
                        {selectedTool.name}
                      </span>
                    </h2>
                    <p className={cn(
                      "text-xl leading-relaxed",
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    )}>
                      {selectedTool.longDescription}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Features - Only show for actual tools */}
                  {selectedTool.id !== "coming-soon" && (
                    <div className="text-center">
                      <h3 className={cn(
                        "text-2xl font-bold mb-4",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}>Key Features</h3>
                      <ul className="space-y-2 inline-block text-left">
                        {selectedTool.features.map((feature, index) => (
                          <li key={index} className={cn(
                            "flex items-center",
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          )}>
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Use Cases - Only show for actual tools */}
                  {selectedTool.id !== "coming-soon" && (
                    <div className="text-center">
                      <h3 className={cn(
                        "text-2xl font-bold mb-4",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}>Use Cases</h3>
                      <ul className="space-y-2 inline-block text-left">
                        {selectedTool.useCases.map((useCase, index) => (
                          <li key={index} className={cn(
                            "flex items-center",
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          )}>
                            <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="text-center">
                  <a
                    href={selectedTool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-8 py-4 bg-gradient-to-r ${selectedTool.color} hover:scale-105 rounded-lg text-white font-semibold shadow-lg transition-all duration-75`}
                  >
                    {selectedTool.id === "coming-soon" ? "⭐ Star on GitHub" : `Launch ${selectedTool.name}`}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToolsPage; 