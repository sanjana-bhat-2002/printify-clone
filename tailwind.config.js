/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("@anishshobithps/tailwind-breakpoints")],
};
