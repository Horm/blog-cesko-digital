import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        content: "1200px",
      },
      colors: {
        pebble: "#F9F9F9",
        it: "#0000FF",
        violet: "CCCCFF",
        yellow: "#FFF6A3",
        plum: "#080831",
        gray: "#EDEDEF",
        gravel: "#A9A9B1",
        asphalt: "#47475B",
      },
    },
  },
  plugins: [],
};

export default config;
