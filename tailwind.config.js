const colors = require('./src/ui/theme/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        'poppins-medium': 'Poppins-Medium',
        'poppins-semibold': 'Poppins-SemiBold',
        'poppins-bold': 'Poppins-Bold',
      },
      colors,
    },
  },
  plugins: [],
}
