/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily':{
        "Relway":['Raleway', 'sans-serif'],
        "Rancho": ['Rancho', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}

