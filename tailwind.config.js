/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
    spacing: {
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px'
    }
  },
  plugins: []
}
