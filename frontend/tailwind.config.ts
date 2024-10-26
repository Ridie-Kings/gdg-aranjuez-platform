import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1C1C1C",
        customOrange: "#FF7518",
        purple: "#4B0082",
        customGreen: "#3D9970",
        customGray: "#B0B0B0",
        customRed: "#8B0000",
        background: "#1e1e1e",
        default: "#A7A3A3",
      },
      fontFamily: {
        display: ["Creepster", "system-ui"]
      },
      boxShadow: {
        'glow-orange': '0px 0px 12px 3px #FF7518',
      },
      textShadow: {
        'glow-orange': '0 0 10px #FF7518, 0 0 20px #FF7518, 0 0 30px #FF7518',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },    
          '50%': { opacity: '0.4' },       
          '30%': { opacity: '0.8' },       
          '70%': { opacity: '0.9' },       
        },
      },
      animation: {
        flicker: 'flicker 3.5s ease-in-out 4', 
      },
      borderFlicker: {
        flicker: 'flicker 0.5s ease-in-out 4',  // Clase personalizada solo para el borde
      }
    },
  },
  plugins: [ 
    function (api: PluginAPI) {
    const { addUtilities } = api;
    addUtilities({
      '.text-shadow-glow': {
        textShadow: '0 0 10px #FF7518, 0 0 20px #FF7518, 0 0 30px #FF7518',
      },
    });
  },],
};

export default config;
