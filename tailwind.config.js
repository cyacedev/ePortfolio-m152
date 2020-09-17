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
  },
  purge: ["./html/*.html", "index.html"],
};
