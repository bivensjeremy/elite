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
          // Base
          background: "#f9fafb",   // Lightest background (gray-50)
          foreground: "#111827",   // Primary text (gray-900)

          // Primary Action (e.g., buttons, links)
          primary: {
            DEFAULT: "#374151",    // Strong neutral (gray-700)
            foreground: "#ffffff", // White text on dark button
          },

          // Secondary Action (e.g., subtle buttons, accents)
          secondary: {
            DEFAULT: "#6b7280",    // Muted neutral (gray-500)
            foreground: "#ffffff", // White text on secondary
          },

          // Tertiary Accent (e.g., highlights, tags, icons)
          accent: {
            DEFAULT: "#C7A782",    // Light neutral (gray-300)
            foreground: "#ffffff", // Dark text for contrast
          },
        }
      },
      dark: {
        colors: {
          // Base
          background: "#f4f5f7",   // Soft neutral background (gray-100)
          foreground: "#1f2937",   // Deep slate text (gray-800)

          // Primary Action (e.g., buttons, links)
          primary: {
            DEFAULT: "#0f4c81",    // Consulting blue (deep, confident)
            foreground: "#ffffff", // White text on primary
          },

          // Secondary Action (e.g., subtle buttons, accents)
          secondary: {
            DEFAULT: "#64748b",    // Slate gray (gray-500)
            foreground: "#ffffff", // White text on secondary
          },

          // Tertiary Accent (e.g., highlights, tags, icons)
          accent: {
            DEFAULT: "#d97706",    // Bold amber (warm, energetic, professional)
            foreground: "#ffffff", // White text for contrast
          },
        }
      },
      // alt: {
      //   colors: {
      //     background: '#F8FAFC', // soft white for page background
      //     foreground: '#003366', // navy blue for body text

      //     primary: {
      //       DEFAULT: '#098826', // safety orange for call-to-action
      //       foreground: '#FFFFFF' // dark charcoal for high contrast on orange
      //     },

      //     secondary: {
      //       DEFAULT: '#003366', // navy blue for sections or headers
      //       foreground: '#FFFFFF' // white text over navy
      //     },

      //     accent: {
      //       DEFAULT: '#FF6600', // leaf green for highlights
      //       foreground: '#003366' // white text over green
      //     },

      //     danger: {
      //       foreground: '#FFFFFF',
      //       DEFAULT: '#C20E4D'
      //     },
      //   }
      // }
    }
  })],
}

module.exports = config;