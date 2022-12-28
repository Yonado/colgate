/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Open-Sans"'],
      'vera': ['"Vera"'],
    },
    extend: {
      dropShadow: {
        'sm': '1px 1px 0px rgba(0,0,0,0.25)',
        'md': '2px 2px 0px rgba(0,0,0,0.25)',
        'lg': '3px 3px 0px rgba(0,0,0,0.25)',
        'xl': '4px 4px 0px rgba(0,0,0,0.25)',
        '2xl': '4px 4px 0px rgba(0,0,0,0.30)'
      }
    },
  },
  plugins: [],
}
