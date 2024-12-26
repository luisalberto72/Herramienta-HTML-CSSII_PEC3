module.exports = {
  content: [
    "./src/**/*.{html,js}", 
  ],
  theme: {
    extend: {
      colors: {
          'verde-cocina': '#2F855A'
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',  // Para márgenes y tamaños personalizados
      },
    },
  },
  plugins: [],
}
