/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        quickInOut: "cubic-bezier(0.76, 0, 0.24, 1)",
        circInOut: "cubic-bezier(0.43, 0.14, 0.23, 0.96)",
      },
      colors: {
        primary: "bg-teal-1",
      },
    },
  },
  plugins: [],
};
