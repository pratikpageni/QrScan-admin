/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira", "sans-serif"],
      },
      colors: {
        brandcolor:"#00a9d3",
        qr:"#ffffff"
      },
    },
  },
  plugins: [],
};
