import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    screens: {
      big: "1050px",
      tiny: "900px",
      supertiny: "450px",
      ubertiny: "250px",
    },
  },
  plugins: [animate],
};
