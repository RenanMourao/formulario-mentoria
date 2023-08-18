/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
        'serif': ['Roboto', 'ui-serif', 'Georgia'],
        'mono': ['Roboto', 'ui-monospace', 'SFMono-Regular'],
        'display': ['Roboto', 'Oswald'],
        'body': ['Roboto', 'Open Sans'],
      }
      
    },
  },
  plugins: [],
}

