import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { Engine } from "tsparticles-engine"; // Import the correct type

export default function TrianglesBackground() {
    async function particlesInit(main: Engine) { // Explicitly type 'main'
        await loadTrianglesPreset(main);
    }

    const options = {
        background: { color: "transparent" }, // transparent to show CSS gradient
        particles: {
          number: { value: 40 }, // Reduced from 60 to 40
          color: { value: "#A259FF" },
          shape: { type: "triangle" },
          opacity: { value: 0.3 }, // Reduced opacity
          size: { value: 2 }, // Reduced size
          links: { enable: true, color: "#A259FF", width: 1, opacity: 0.4 }, // Reduced link opacity
          move: { enable: true, speed: 0.8 }, // Reduced speed from 1.2 to 0.8
        },
        fpsLimit: 30, // Limit FPS to 30 for better performance
      };      

    return <Particles id="tsparticles" init={particlesInit} options={options} />;
}