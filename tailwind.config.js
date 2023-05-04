/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#09a05a",
        
"secondary": "#ea5bb3",
        
"accent": "#58e8b3",
        
"neutral": "#27192E",
        
"base-100": "#FCFCFD",
        
"info": "#3A75D4",
        
"success": "#188173",
        
"warning": "#B48408",
        
"error": "#FC4A4A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

