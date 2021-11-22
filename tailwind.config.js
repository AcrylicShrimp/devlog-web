module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.ts', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lightblue: '#5090BF',
      wine: '#CE4972',
      lightgray: '#CCCCCC',
      gray: '#6A8191',
      yellow: '#FFA71A',
      red: '#F85931',
      black: '#222222',
      white: 'white',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
