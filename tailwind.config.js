/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{hbs,handlebars,html}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
