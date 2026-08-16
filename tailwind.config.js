/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E33",
          light: "#13304f",
          dark: "#08172654",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D9BE6E",
          dark: "#A98B33",
        },
        warm: "#F7F6F3",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(11, 30, 51, 0.18)",
        soft: "0 6px 24px -10px rgba(11, 30, 51, 0.14)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
