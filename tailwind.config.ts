import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#F81DFB",
        "custom-dark": "rgba(20, 12, 31, 1)",
      },
      backgroundColor: {
        "custom-green": "#96ea63",
      },
      backgroundImage: {
        dots: "url('/images/dots-background.svg')",
        "custom-radial-gradient":
          "radial-gradient(50% 50% at 50% 50%, rgba(172, 26, 175, 0.3) 0%, rgba(20, 12, 31, 0.6) 100%)",
        "custom-radial-gradient-large":
          "radial-gradient(50% 50% at 50% 50%, rgba(172, 26, 175, 0.3) 0%, rgba(20, 12, 31, 0.2) 100%)",
        "custom-linear-gradient":
          "linear-gradient(90deg, #794AB9 0%, #F81DFB 100%)",
      },
      backgroundSize: {
        "custom-small": "494px",
        "custom-medium": "754px",
        "custom-large": "894px",
      },
      backgroundPosition: {
        "custom-small": "center 28px",
        "custom-medium": "center 35px",
        "custom-large": "center 48px",
      },
    },
  },
  plugins: [],
};
export default config;
