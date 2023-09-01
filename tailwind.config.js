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
      },
      transitionDelay: {
        custom: '120ms',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        slideInRightSM:
          'slideInRightSM 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)',
        slideInRight:
          'slideInRight 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)',
        slideOutRightSM:
          'slideOutRightSM 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)',
        slideOutRight:
          'slideOutRight 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)',
        customSpin: 'customSpin 1s linear infinite',
      },
      keyframes: {
        slideInRightSM: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-64px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-16px)' },
        },
        slideOutRightSM: {
          '100%': { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(-64px)' },
        },
        slideOutRight: {
          '100%': { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(-16px)' },
        },
        customSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
