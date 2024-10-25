/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        evil: {
          primary: '#ff3e00',
          secondary: '#40E0D0'
        }
      }
    },
  },
  plugins: [],
}