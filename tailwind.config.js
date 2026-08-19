/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f",
        darker: "#1a1a1a",
        accent: "#3b82f6",
      },
      fontFamily: {
        mono: ["Menlo", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
};
