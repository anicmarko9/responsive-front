/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.465, 0.183, 0.153, 0.946)',
      },
      colors: {
        primary: '#dd71c6',
        secondary: '#73c3f4',
        tertiary: '#ffd900',
        countdown: '#4D85B0',
        customWhite: '#f9f5f6',
        slide: '#d3d3d3',
      },
      transitionDelay: {
        custom: '120ms',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        customSpin: 'customSpin 1s linear infinite',
        // Changed animation name
        slideOutLeft:
          'slideOutLeft 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)', // Added slideOutLeft
        // Changed animation name
        slideOutLeftSM:
          'slideOutLeftSM 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)', // Added slideOutLeftSM
        // Changed animation name
        slideInLeft: 'slideInLeft 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)', // Added slideInLeft
        // Changed animation name
        slideInLeftSM:
          'slideInLeftSM 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)', // Added slideInLeftSM
      },
      keyframes: {
        customSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // Added slideOutLeft keyframes
        slideOutLeft: {
          '100%': { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(0px)' },
        },
        // Added slideOutLeftSM keyframes
        slideOutLeftSM: {
          '100%': { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(0px)' },
        },
        // Added slideInLeft keyframes
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0px)' },
        },
        // Added slideInLeftSM keyframes
        slideInLeftSM: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
};
