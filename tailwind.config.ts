import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#272625",
        secondary: "#fcfefa",
        accent: "#9a8b78",
        neutral: "#3c3c3c",
        "base-100": "#b0a495",
        info: "#2f2f2f",
        success: "#9cc400",
        warning: "#ffad00",
        error: "#ff2a63",
      },
      textColor: {
        primary: "#272625",
        secondary: "#fcfefa",
        accent: "#9a8b78",
        neutral: "#3c3c3c",
        "base-100": "#b0a495",
        info: "#2f2f2f",
        success: "#9cc400",
        warning: "#ffad00",
        error: "#ff2a63",
      },
      color: {
        primary: "#272625",
        secondary: "#fcfefa",
        accent: "#9a8b78",
        neutral: "#3c3c3c",
        "base-100": "#b0a495",
        info: "#2f2f2f",
        success: "#9cc400",
        warning: "#ffad00",
        error: "#ff2a63",
      },
      borderColor: {
        primary: "#272625",
        secondary: "#fcfefa",
        accent: "#9a8b78",
        neutral: "#3c3c3c",
        "base-100": "#b0a495",
        info: "#2f2f2f",
        success: "#9cc400",
        warning: "#ffad00",
        error: "#ff2a63",
      },
    },
  },
  plugins: [],
};
export default config;
