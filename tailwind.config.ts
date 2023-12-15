import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8432ab",
        secondary: "#ff4d0d",
        base: "#464646",
      },
      textColor: {
        base: "#464646",
        primary: "#8432ab",
        secondary: "#ff4d0d",
      },
      backgroundColor: {
        base: "#ffffff",
        primary: "#8432ab",
        secondary: "#ff4d0d",
      },
      borderColor: {
        primary: "#8432ab",
        secondary: "#ff4d0d",
      },
      fill: {
        base: "#ffffff",
        primary: "#8432ab",
        secondary: "#ff4d0d",
      },
      fontSize: {
        xxs: "0.625rem", //10px
        xs: "0.75rem", //12px
        sm: "0.813rem", //13px
        base: "0.875rem", //14px
        lg: "0.938rem", //15px
        xl: "1rem", //16px
        "2xl": "1.125rem", //18px
        "3xl": "1.25rem", //20px
        "4xl": "1.375rem", //22px
        "5xl": "1.5rem", //24px
        "6xl": "1.875rem", //30px
        "7xl": "2.125rem", //34px
        "8xl": "3rem", //48px
        "9xl": "4.188rem", //67px
      },
    },
  },
  plugins: [],
};
export default config;
