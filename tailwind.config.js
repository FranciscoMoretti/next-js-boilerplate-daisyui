/* eslint-disable global-require */

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'dark', // default theme
      'forest',
      'garden',
      'bumblebee',
      {
      "si_recreacion": {                          /* your theme name */
           "primary" : "#c79206",           /* Primary color */
           "primary-focus" : "#543c11",     /* Primary color - focused */
           "primary-content" : "#ffffff",   /* Foreground content color to use on primary color */

           "secondary" : "#00205b",         /* Secondary color */
           "secondary-focus" : "#3c5c8c",   /* Secondary color - focused */
           "secondary-content" : "#ffffff", /* Foreground content color to use on secondary color */

           "accent" : "#37cdbe",            /* Accent color */
           "accent-focus" : "#2aa79b",      /* Accent color - focused */
           "accent-content" : "#ffffff",    /* Foreground content color to use on accent color */

           "neutral" : "#909090",           /* Neutral color */
           "neutral-focus" : "#f1f2f1",     /* Neutral color - focused */
           "neutral-content" : "#141011",   /* Foreground content color to use on neutral color */

           "base-100" : "#ffffff",          /* Base color of page, used for blank backgrounds */
           "base-200" : "#f9fafb",          /* Base color, a little darker */
           "base-300" : "#d1d5db",          /* Base color, even more darker */
           "base-content" : "#1f2937",      /* Foreground content color to use on base color */

           "info" : "#2094f3",              /* Info */
           "success" : "#009485",           /* Success */
           "warning" : "#ff9900",           /* Warning */
           "error" : "#ff5724",             /* Error */
        },
      },
    ],
  },
};
/* eslint-enable global-require */
