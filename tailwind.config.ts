// Import the Config type from tailwindcss
import type { Config } from "tailwindcss";

// Define your Tailwind CSS configuration object
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  // Removed the incorrect module.exports assignment
  theme: {
    extend: {
      animation: {
        // Corrected animation name definition
        "infinite-slider": "infiniteSlider 20s linear infinite",
      },
    },
    keyframes: {
      infiniteSlider: {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(calc(-250px * 5))",
        },
      },
    },
  },
  // Moved the plugins array to the correct position within the configuration object
  plugins: [],
};

// Export the Tailwind CSS configuration object
export default config;