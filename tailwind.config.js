/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{hbs,handlebars,html}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["coffee"],
  },
  plugins: [require("daisyui")],
};
