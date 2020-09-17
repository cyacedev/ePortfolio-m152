const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    // process.env.NODE_ENV === "production" ? require("autoprefixer") : null, //TODO: only uncomment when https://github.com/postcss/postcss-cli/issues/344 is solved
    process.env.NODE_ENV === "production"
      ? cssnano({ preset: "default" })
      : null,
  ],
};
