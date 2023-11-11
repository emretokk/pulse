/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ad6a",
        secondary: "#1fe374",
        lime: "#eafaf1",
        grayish: "#d6dae5",
        dark: "#080c16",
        light: "#fcfcfc",
      },
    },
  },
  plugins: [],
};
