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
          number: { value: 60 },
          color: { value: "#A259FF" },
          shape: { type: "triangle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          links: { enable: true, color: "#A259FF", width: 1.2, opacity: 0.7 },
          move: { enable: true, speed: 1.2 },
        },
      };      

    return <Particles id="tsparticles" init={particlesInit} options={options} />;
}