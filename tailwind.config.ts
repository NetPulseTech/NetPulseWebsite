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
      textColor: {
        "custom-dark": "rgba(20, 12, 31, 1)",
      },
      backgroundColor: {
        "custom-green": "#96ea63",
      },
      backgroundImage: {
        "custom-radial-gradient":
          "radial-gradient(50% 50% at 50% 50%, rgba(173, 26, 175, 0.3) 0%, rgba(20, 12, 31, 1) 100%)",
        "custom-linear-gradient":
          "linear-gradient(90deg, #794AB9 0%, #F81DFB 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
