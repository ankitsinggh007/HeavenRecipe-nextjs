/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ddd6cb",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-to-right": "linear-gradient(90deg, #f9572a, #ff8a05)",
        "custom-background": "linear-gradient(90deg, #f9572a, #ffc905)",
      },
    },
    backdropBlur: {
      none: "none",
      blur: "blur(10px)",
    },
    animation: {
      loading: "loading 1.2s ease-in-out infinite",
    },
    keyframes: {
      loading: {
        "0%": { color: "#e9e9e9" },
        "50%": { color: "#b89b84" },
        "100%": { color: "#e9e9e9" },
      },
    },
  },
  plugins: ["tailwindcss - filters"],
};
