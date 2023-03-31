/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 0.614696px 13.5233px rgba(255, 255, 255, 0.25)",
      },

      backgroundImage: (theme) => ({
        Earth: "url('/src/assets/Earth-2.gif')",
      }),
      fontFamily: {
        Lustria: ["Lustria", "serif"],
        Inria: ["Inria Serif", "serif"],
        Maitree: ["Maitree", "serif"],
        Inter: ["Inter", "serif"],
      },
    },
    clipPath: {
      myPolygon: "polygon(30% 0, 100% 0%, 70% 100%, 0% 100%)",
    },
  },
  plugins: [require("tailwind-clip-path"), require("tailwind-scrollbar")],
};
