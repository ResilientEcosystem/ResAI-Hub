import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { Engine } from "tsparticles-engine"; // Import the correct type
import { useTheme } from "../contexts/ThemeContext";

export default function TrianglesBackground() {
    const { isDarkMode } = useTheme();
    
    async function particlesInit(main: Engine) { // Explicitly type 'main'
        await loadTrianglesPreset(main);
    }

    // Theme-aware particle colors
    const particleColor = isDarkMode ? "#A259FF" : "#8B5CF6"; // Purple for dark, slightly different purple for light
    const linkColor = isDarkMode ? "#A259FF" : "#8B5CF6";

    const options = {
        background: { color: "transparent" }, // transparent to show CSS gradient
        particles: {
          number: { value: 40 }, // Reduced from 60 to 40
          color: { value: particleColor },
          shape: { type: "triangle" },
          opacity: { value: isDarkMode ? 0.3 : 0.2 }, // Slightly more transparent in light mode
          size: { value: 2 }, // Reduced size
          links: { enable: true, color: linkColor, width: 1, opacity: isDarkMode ? 0.4 : 0.3 }, // Reduced link opacity in light mode
          move: { enable: true, speed: 0.8 }, // Reduced speed from 1.2 to 0.8
        },
        fpsLimit: 30, // Limit FPS to 30 for better performance
      };      

    return <Particles id="tsparticles" init={particlesInit} options={options} />;
}