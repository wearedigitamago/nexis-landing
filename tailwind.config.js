// Same theme the page used with the Tailwind Play CDN, now compiled ahead of time.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        "accent-gold": "#C5A059",
        "background-light": "#ffffff",
        "background-dark": "#0a0a0a",
        "soft-gray": "#F9FAFB",
      },
      fontFamily: {
        display: ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0.125rem",
        xl: "0.25rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
