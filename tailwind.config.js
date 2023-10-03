/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'amatic-sc': ['Amatic SC', 'cursive'],
        'rajdhni-sans': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        'bage-green': '#C5AA65',
      }, 
    },
  },
  plugins: [],
}