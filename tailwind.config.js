// Theme tokens come from DESIGN.md (colors were checked for WCAG AA contrast).
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        "ink-2": "#141416",
        paper: "#f4f2ee",
        gold: "#C5A059",
        "gold-ink": "#7a5c22",
        mist: "#a3a3a3",
        ash: "#57534e",
      },
      fontFamily: {
        sans: ["Work Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
