/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3f7ed9",

          secondary: "#f5f5f5",

          accent: "#f5a623",

          neutral: "#8d99ae",

          "base-100": "#ffffff",

          info: "#949599",

          success: "#a1d285",

          warning: "#efefef",

          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
