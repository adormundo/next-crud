/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  safelist: [
    /^bg-/,
    /^to-/,
    /^from-/,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
