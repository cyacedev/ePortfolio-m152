module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",

      orange: {
        100: "#fffaf0",
        500: "#ed8936",
        600: "#dd6b20",
        700: "#c05621",
      },
      gray: {
        400: "#cbd5e0",
        700: "#4a5568",
        900: "#1a202c",
      },
    },
    extend: {
      spacing: {
        96: "24rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
