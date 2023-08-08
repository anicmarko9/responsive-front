/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "libre-baskerville": ["Libre Baskerville", "serif"],
      },
      colors: {
        primary: "#dd71c6",
        secondary: "#73c3f4",
        tertiary: "#ffd900",
        countdown: "#4D85B0",
        customWhite: "#f9f5f6",
      },
      transitionDelay: {
          'custom':'120ms',
      },
      animation: {
        slideInRightSM: "slideInRightSM 1s ease-in-out",
        slideInRight: "slideInRight 1s ease-in-out",
        slideOutRightSM: "slideOutRightSM 1s ease-in-out",
        slideOutRight: "slideOutRight 1s ease-in-out",
      },
      keyframes: {
        slideInRightSM: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-64px)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-16px)" },
        },
        slideOutRightSM: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(-64px)" },
        },
        slideOutRight: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
