
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        cyberpunk: {
          dark: "#0F0E17",
          darker: "#080814",
          neon: "#00F0FF",
          pink: "#FF2A6D",
          purple: "#D946EF",
          green: "#05FF00",
          yellow: "#FFD166",
          blue: "#3A86FF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-neon": {
          "0%, 100%": { 
            opacity: "1",
            filter: "brightness(1) drop-shadow(0 0 10px hsl(var(--neon-glow)))"
          },
          "50%": { 
            opacity: "0.8",
            filter: "brightness(0.8) drop-shadow(0 0 5px hsl(var(--neon-glow)))"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { 
            filter: "drop-shadow(0 0 15px hsl(var(--neon-glow)))" 
          },
          "50%": { 
            filter: "drop-shadow(0 0 5px hsl(var(--neon-glow)))" 
          },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-neon": "pulse-neon 2s infinite ease-in-out",
        "float": "float 6s infinite ease-in-out",
        "glow": "glow 3s infinite ease-in-out",
        "slide-up": "slide-up 0.7s ease-out",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "gradient-shift": "gradient-shift 5s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyberpunk-grid": "linear-gradient(rgba(66, 211, 255, 0.3) 1px, transparent 1px), linear-gradient(to right, rgba(66, 211, 255, 0.3) 1px, transparent 1px)",
        "neon-glow": "linear-gradient(180deg, rgba(0, 240, 255, 0) 0%, rgba(0, 240, 255, 0.3) 100%)",
      },
      boxShadow: {
        "neon-blue": "0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF",
        "neon-pink": "0 0 5px #FF2A6D, 0 0 10px #FF2A6D, 0 0 15px #FF2A6D",
        "neon-green": "0 0 5px #05FF00, 0 0 10px #05FF00, 0 0 15px #05FF00",
        "glass": "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        "neon-blue": "0 0 5px rgba(0, 240, 255, 1)",
        "neon-pink": "0 0 5px rgba(255, 42, 109, 1)",
        "neon-green": "0 0 5px rgba(5, 255, 0, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
