import Lottie from "lottie-react";
import animationData1 from "../assets/blockchainDB.json";
import animationData2 from "../assets/resDBAI.json";
import Carousel from "../components/ui/carousel";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center h-full w-full">
      <Carousel />
      </div>
      {/* Content below carousel starts here* */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 mx-auto mt-15">
        {/* Left Side - SVG / Lottie Animation */}
        <div className="flex-1 flex items-center justify-center">
          <Lottie 
            animationData={animationData1} 
            loop={true} 
            className="w-70 h-70 md:w-85 md:h-85"
            style={{ maxWidth: '100%', height: 'auto' }}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice'
            }}
            speed={0.8} // Reduced animation speed
          />
        </div>
        {/* Right Side - Text */}
        <div className="flex-1 flex flex-col justify-center text-left ml-10">
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
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 mx-auto mt-15">
      {/* Left Side - Text */}
      <div className="flex-1 flex flex-col justify-center text-left ml-10">
        <h1 className="text-6xl font-bold text-purple-300 mb-4">What is ResAI?</h1>
        <p className="text-xl text-gray-200 mb-2">
          ResAI is your intelligent assistant for exploring ResilientDB and beyond.
        </p>
        <p className="text-lg text-gray-400">
        ResAI helps you interactively query documentation, understand consensus protocols, and connect research insights
        directly to the codebase — making complex systems more accessible and insightful.
        </p>
      </div>

      {/* Right Side - SVG / Lottie Animation */}
      <div className="flex-1 flex items-center justify-center">
        <Lottie 
          animationData={animationData2} 
          loop={true} 
          className="w-[380px] h-[380px] md:w-[520px] md:h-[520px]"
          style={{ maxWidth: '100%', height: 'auto' }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice'
          }}
          speed={0.8} // Reduced animation speed
        />
      </div>
    </div>
    </div>
  );
};

export default HomePage;
