module.exports = {
    content: ['./app/**/*.tsx', './app/**/*.ts'],
    theme: {
      colors: {
        rojobanorte: '#E30029',
        grisbanorte: '#5B6670',
        blancobanorte: '#FFFFFF',
        banorteenlaces: '#EB0029',
        banortepositivo: '#6CC04A',
        banortealertas: '#FF671B',
        banorteavisos: '#FFA400',
      },
      fontfamily: {
        'gotham': ['Gotham', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      extend: {
        
        aspectRatio: {
          '4/1': '4 / 1',
        },
        
      },
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    },
  };