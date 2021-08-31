module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.ts', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: 'white',
      red: '#fb3f5f',
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
