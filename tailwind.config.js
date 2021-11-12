// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Base: "#1e2027",
        Primary: "#DFAE4F",
        "Neutral-800": "#1E2027",
        "Neutral-700": "#666D79",
        "Neutral-600": "#9A9FA7",
        "Neutral-500": "#C7CBD1",
        "Neutral-400": "#C7C3B3",
        "Neutral-300": "#D3CFC1",
        "Neutral-200": "#E4E2DB",
        "Neutral-100": "#F0EEE9",
      },
      width: {
        "1/10": "87%",
        "hero-width-bg": "790px",
        "img-card-width": "97%",
        "img-card-width-lg": "95%",
      },
      fontSize: {
        large: "64px",
      },
      lineHeight: {
        12: "4.5rem",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
