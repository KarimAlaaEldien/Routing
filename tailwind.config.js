/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      colors:{
        'tial':{
          400:'#1abc9c',
          800:'#2C3E50',
          900:'#1a252f',
        
      }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}