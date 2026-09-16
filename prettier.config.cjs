// prettier.config.cjs
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/index.css",
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      options: {
        parser: "typescript",
      },
    },
  ],
};