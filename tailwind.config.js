module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {colors: {
      // Primary Color (Main Color)
      gold: '#FFAA00',

      // Complementary Colors
      'dark-blue': '#004466',
      orange: '#FF5500',
      'soft-green': '#66BB99',
      lilac: '#AA66CC',

      // Accent Colors
      'electric-blue': '#007FFF',
      'saffron-yellow': '#FFCC33',
      'forest-green': '#009900',
      'hot-pink': '#FF3366',
    },},
  },
  
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ['dark'], // Add 'halloween' theme here
  },
};
