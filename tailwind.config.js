module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'video-bg':"url(../src/assets/img/main-background-5.jpg)",

      },
      fontFamily: {
        // "Caviar": ["Caviar Dreams Bold", "sans"],
        danc: ["Dancing Script", "cursive"],
        poi: ["Poiret One", "cursive"]
      },
      colors: {
        "textGold": "#c9ab81",
        "bgLight":"#0b1315"
      },
    
    },
  },
  plugins: [],
};
