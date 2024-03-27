/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgCover: "url('/wk1-bg.png')",
      },
      colors: {
        modal: {
          parent: "#6C5D4A",
        },
        purple: {
          primary: "#CD3F97",
        },
        pink: {
          dark: "#FE6784",
          primary: "#FFAEBE",
        },
        green: {
          1: "#A4FDFB",
          2: "#25A3A1",
        },
      },
      fontSize: {
        32: "32px",
      },
    },
  },
  plugins: [],
};
