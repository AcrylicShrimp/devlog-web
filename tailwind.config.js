module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.ts', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: 'white',
      red: '#fb3f5f',
      error: '#ff0000',
      darkgray: '#4d4d4d',
    },
    fontFamily: {
      point: ['Maven-Pro'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
