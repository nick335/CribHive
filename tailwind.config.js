const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#F9F2E6',
        bgLight: '#F4E9DA',
        bgSecondary: '#201B18',
        headerPrimary: '#201B18',
        textPrimary: '#583C2B',
        textSecondary: '#E0BC84',
        headerSecondary: '#E0BC84',
        primaryBorder: '#E0BC84',
        btnPrimary: '#201B18',
        btnSecondary: '#F9F2E6',
        btnhover: '#E0BC84'
      },
      fontFamily: {
        jhengHei: ["Microsoft-JhengHei", "sans-serif"],
      },
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        disappear: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          }
        },
      },
      animation: {
        'appear': 'appear 300ms  ease-in forwards',
        'disappear': 'disappear 300ms  ease-in forwards',
      },
      boxShadow: {
        'navShadow': '0px 8px 12px 0px rgba(32, 27, 24, 0.30)',
        'overflowdiv': '4px 4px 35.5px 0px rgba(224, 188, 132, 0.10)',
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
