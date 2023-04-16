/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/Compnents/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '86': '25rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'xxs': '0.625rem', 
        'xxxs':'0.558rem', 
        
      },
      
      
    },
  },
  plugins: [],
}
