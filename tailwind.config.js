module.exports = {
  theme: {
    extend: {
      spacing: {
        96: "24rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./html/*.html", "index.html"],
};
