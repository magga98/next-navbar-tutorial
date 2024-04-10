/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6c5b4e",
          "secondary": "#d7ccbe",
          "accent": "#606233",
          "neutral": "#efe3d4",
          "base-100": "#ffffff",
        },
      },
      "light",
      "dark",
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontFamily: {
        PlayfairDisplay: ['Playfair Display', 'serif'],
        Parisienne: ['Parisienne', 'cursive'],
      },
      backgroundImage: {
        'flowerimage': "url('../public/flowers.jpg')",
        'plantimage': "url('../public/plants.jpg')",
        'giftingimage': "url('../public/gifting.jpg')",
        'endarimage': "url('../public/endar.jpg')",
        'rammiimage': "url('../public/rammi.png')",
        'middleimage': "url('../public/middle.jpg')",
        'prettyimage': "url('../public/pretty.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
