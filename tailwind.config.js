/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-jumbotron": "url('images/jumbotron-t-shirts.webp')",
        "welcome-jumbotron-alfasarana":
            "url('images/jumbotron-t-shirts-alfasarana.webp')",
      },
    },
  },
  plugins: [],
}