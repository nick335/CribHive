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
        bgOrange: '#E0BC84',
        headerPrimary: '#201B18',
        textPrimary: '#583C2B',
        textSecondary: '#E0BC84',
        headerSecondary: '#E0BC84',
        primaryBorder: '#E0BC84',
        secondaryBorder: '#201B18',
        darkBorder2: '#583C2B',
        btnPrimary: '#201B18',
        btnSecondary: '#F9F2E6',
        btnhover: '#E0BC84',
        error: '#EB5757',
      },
      fontFamily: {
        jhengHei: ['var(--font-JhengHei)'],
        inter:   ["Inter", "sans-serif"]
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
        slideUp:{
          '0%': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          '100%': {
            top: '-150%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }
        },
        slideDown: {
          '0%': {
            top: '-150%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          },
          '100%': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }
        },
      },
      animation: {
        'appear': 'appear 300ms  ease-in forwards',
        'disappear': 'disappear 300ms  ease-in forwards',
        'slideUp': 'slideUp 1000ms ease-in-out both',
        'slideDown': 'slideDown 1000ms ease-in-out both'
      },
      boxShadow: {
        'navShadow': '0px 8px 12px 0px rgba(32, 27, 24, 0.30)',
        'navShadowLg': '0px 8px 10px 0px rgba(32, 27, 24, 0.10)',
        'overflowdiv': '4px 4px 35.5px 0px rgba(224, 188, 132, 0.10)',
        'boxContent': '0px 3.77558pxpx 3.77558px 0px rgba(32, 27, 24, 0.30)',
        'box' : '0px 8px 12px 0px rgba(32, 27, 24, 0.30)',
        'apartmentBox': '0px 4.53px 4.53px 0px rgba(32, 27, 24, 0.30)' ,
        'contactShadow': '2px 4px 17px 8px rgba(0, 0, 0, 0.25)',
        'formShadow': '8px 8px 16px 0px rgba(0,0,0,0.20), -8px -8px 16px 0px rgba(0,0,0, 0.20)',
      },
      screens:{
        'mdx': '898px',
        '3xl': '1780px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar-hide"),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
