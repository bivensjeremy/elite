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
          background: "#F2F4F7",        // Soft, clean gray — supports the airy blue primary
          foreground: "#0F172A",       // Deep slate text for strong readability

          // Primary Action
          primary: {
            DEFAULT: "#85BBF9",        // Your locked primary
            foreground: "#0B1120",     // Dark slate for better contrast than pure white
          },

          // Secondary Action
          secondary: {
            DEFAULT: "#4A4A4A",        // Your locked secondary
            foreground: "#FFFFFF",     // White text stays ideal here
          },

          // Accent (harmonized with primary)
          accent: {
            DEFAULT: "#5C8AC7",        // A deeper blue that pairs with primary but stands out
            foreground: "#FFFFFF",
          },

          // Supporting tones (helpful but optional)
          muted: {
            DEFAULT: "#E5E7EB",        // Subtle gray for borders, dividers, soft UI elements
            foreground: "#4B5563",
          },

          success: {
            DEFAULT: "#4CAF50",        // Clean green tone for positive states
            foreground: "#FFFFFF",
          },

          warning: {
            DEFAULT: "#E9B04E",        // Warm amber—not clashing with the blue palette
            foreground: "#422006",
          },

          danger: {
            DEFAULT: "#DC4C64",        // Softened red for errors
            foreground: "#FFFFFF",
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
            DEFAULT: "#B7D9FF",    // Consulting blue (deep, confident)
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
    }
  })],
}

module.exports = config;