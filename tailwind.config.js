import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: '#F8FAFC', // soft white for page background
          foreground: '#003366', // navy blue for body text

          primary: {
            DEFAULT: '#098826', // safety orange for call-to-action
            foreground: '#FFFFFF' // dark charcoal for high contrast on orange
          },

          secondary: {
            DEFAULT: '#003366', // navy blue for sections or headers
            foreground: '#FFFFFF' // white text over navy
          },

          accent: {
            DEFAULT: '#FF6600', // leaf green for highlights
            foreground: '#003366' // white text over green
          },

          danger: {
            foreground: '#FFFFFF',
            DEFAULT: '#C20E4D'
          },
        }
      }
    }
  })],
}

module.exports = config;