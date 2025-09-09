"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Navigation } from "swiper/modules"
import Lottie from "lottie-react"
import animationData1 from "../../assets/ResEchoSVG.json"
import animationData2 from "../../assets/DocumentationSVG.json"
import animationData3 from "../../assets/Coin.json"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Carousel = () => {
  return (
    <div className="w-full h-screen mx-auto relative">
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade, Autoplay, Navigation]}
        className="h-screen"
      >
        <SwiperSlide className="relative bg-gradient-to-b from-purple-800 to-transparent">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

          {/* Content container with padding */}
          <div className="relative z-10 h-full w-full px-8 md:px-16 lg:px-24 flex items-center justify-center">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left: Text + Button */}
              <div className="flex-1 flex flex-col justify-center text-left">
                <h2 className="font-serif text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Meet Nexus
                  </span>
                </h2>

                <p className="font-sans text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-xl">
                Nexus is your intelligent gateway to ResilientDB's world. Explore consensus protocols, dive into research papers, and discover the innovations behind our database.
                </p>

                <a 
                  href="https://nexus.resilientdb.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white hover:text-white font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-fit text-lg inline-block"
                >
                  Talk to Nexus
                </a>
              </div>

              {/* Right: Lottie Animation */}
              <div className="flex-1 flex justify-center items-center">
                <Lottie
                  animationData={animationData1}
                  loop={true}
                  className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative bg-gradient-to-b from-indigo-800 to-transparent">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

        {/* Content container with padding */}
        <div className="relative z-10 h-full w-full px-8 md:px-16 lg:px-24 flex items-center justify-center">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left: Lottie Animation */}
            <div className="flex-1 flex justify-center items-center">
              <Lottie
                animationData={animationData2}
                loop={true}
                className="w-[340px] h-[340px] md:w-[430px] md:h-[430px] lg:w-[540px] lg:h-[540px]"
              />
            </div>
            {/* Right: Text + Button */}
            <div className="flex-1 flex flex-col justify-center text-left">
              <h2 className="font-serif text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">
                  Introducing: Beacon
                </span>
              </h2>

              <p className="font-sans text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-xl">
              With Beacon, explore your documentation like never before — ask questions, dive deep, and connect directly to the underlying code.
              </p>
              <a 
                href="https://beacon.resilientdb.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 rounded-lg text-white hover:text-white font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-fit text-lg inline-block"
              >
                Launch Beacon
              </a>
            </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative bg-gradient-to-b from-emerald-800 to-transparent">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

        {/* Content container with padding */}
        <div className="relative z-10 h-full w-full px-8 md:px-16 lg:px-24 flex items-center justify-center">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left: Text + Button */}
            <div className="flex-1 flex flex-col justify-center text-left">
              <h2 className="font-serif text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Discover ContractForge
                </span>
              </h2>

              <p className="font-sans text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-xl">
              Forge smart contracts with AI assistance. Design, deploy, and manage blockchain contracts with intelligent suggestions and automated testing.
              </p>
              <a 
                href="https://contractforge.resilientdb.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg text-white hover:text-white font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-fit text-lg inline-block"
              >
                Write Your Contract
              </a>
            </div>

            {/* Right: Lottie Animation */}
            <div className="flex-1 flex justify-center items-center">
              <Lottie
                animationData={animationData3}
                loop={true}
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className="relative bg-gradient-to-b from-purple-800 to-transparent">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

        {/* Centered content container */}
        <div className="relative z-10 h-full w-full px-8 md:px-16 lg:px-24 flex items-center justify-center">
          <div className="max-w-3xl w-full flex flex-col items-center text-center">
            <h2 className="font-serif text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                🚀 Coming Soon!
              </span>
            </h2>

            <p className="font-sans text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              We're brewing up something exciting — stay tuned as we build the next chapter of our platform!
            </p>

            <a 
              href="https://github.com/ResilientEcosystem/ResAI-Hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-white hover:text-white font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-fit text-lg inline-block"
            >
              ⭐ Star on GitHub
            </a>
          </div>
        </div>
      </SwiperSlide>

        {/* Navigation arrows with better styling and proper z-index */}
        <div className="swiper-button-prev after:text-white after:text-2xl after:content-['prev'] after:font-bold z-20"></div>
        <div className="swiper-button-next after:text-white after:text-2xl after:content-['next'] after:font-bold z-20"></div>
      </Swiper>
    </div>
  )
}

export default Carousel
