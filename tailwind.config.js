/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      aspectRatio: {
        "2/1": "2 / 1",
        "3/1": "3 / 1",
      },
      scale: {
        200: "2",
      },
      backgroundImage: {
        // noise: "url('../assets/images/noise.webp')",
      }
    },
  },
  plugins: [],
};
