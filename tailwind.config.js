/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/daisyui/dist/**/*.js",
    "./node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    fontFamily: {
      extends: {
        sans: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["lofi", "black"],
    darkTheme: "black",
  },
};
