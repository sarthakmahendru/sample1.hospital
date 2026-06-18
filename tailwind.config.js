/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0052CC',
        secondary: '#1E5BA8',
      }
    }
  },
  plugins: []
}
