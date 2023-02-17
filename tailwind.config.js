/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1",
        keyframes: {
          slideUp: {
            from: { transform: "translateY(100%)"},
            to: {transform: "translateY(0)"},
          }
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
