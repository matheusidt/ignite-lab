/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent:"transparent",
      
      gray:{
      500: "#7c7c8a",
      800: "#262626",
      900: "#171717",
      },
      
      blue:{
      700: "#4f46e5",
      500: "#61dafb",
      600: "#7a72f4",
    },
      
      white:{
        700: "#f5f5f5",
        800: "#fafafa",
  
      },
    
      "black-900": "#000000",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}
