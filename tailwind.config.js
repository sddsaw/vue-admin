/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
    spacing: {
      10: '10px',
      20: '20px',
      3: '30px',
      4: '24px',
      5: '32px',
      6: '48px'
    }
  },
  plugins: []
}
