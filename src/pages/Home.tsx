import Lottie from "lottie-react";
import animationData from "../assets/blockchainDB.json";
import Carousel from "../components/ui/carousel";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center h-full w-full">
      <Carousel />
      </div>
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 mx-auto">
        {/* Left Side - SVG / Lottie Animation */}
        <div className="flex-1 flex items-center justify-center">
          <Lottie animationData={animationData} loop={true} className="w-85 h-85 md:w-100 md:h-100" />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 flex flex-col justify-center text-left">
          <h1 className="text-6xl font-bold text-purple-300 mb-4">ResilientDB</h1>
          <p className="text-xl text-gray-200 mb-2">
            Global-Scale Sustainable Blockchain Fabric
          </p>
          <p className="text-lg text-gray-400">
            ResilientDB is a high-performance blockchain database designed for scalability, speed, and fault tolerance.
            It enables secure, decentralized applications with reliable data consistency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
