/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use class-based dark mode, so that we can toggle it with a class on the body element
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lutapiPurpleDark: "hsl(265, 60%, 32%)",
        lutapiPurple: "hsl(265, 70%, 42%)",
        lutapiPurpleLight: "hsl(265, 70%, 52%)",
        lutapiPurpleVeryLight: "hsl(265, 90%, 95%)",
        lutapiAccentPurple: "hsl(265, 100%, 62%)",
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        lightGray: "hsl(208, 11%, 53%)",
      },
    },
  },
  plugins: [],
};
