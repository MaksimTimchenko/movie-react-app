/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#1E1E1E',
        'medium-gray' : '#3D3D3D',
        'gold': '#FED530',
        'name-color': '#E6E6E6',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/erroww.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'bg-shadow': "linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 1))"
      }
    },
  },
  plugins: [],
}
