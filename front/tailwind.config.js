/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset 0px 0px 10px 10px #cec8c8',
      },
    },
  },
  plugins: [],
};
