/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dancing": ['Dancing Script', 'cursive']

      },
      colors: {
        "orange-button":  "#ff561e"
      }
    },
      screens: {
        'md1': '768px',
        'md2': '1024px',
        'lg': '1280px',
        }
  },
  plugins: [],
}

