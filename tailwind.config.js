/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "sans-serif"],
      },
      colors: {
        wlight: "rgba(255, 255, 255, 0.08)",
        wlighter: "rgba(255, 255, 255, 0.8)",
        darkLight: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
