module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        96: "24rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
}
