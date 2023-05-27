module.exports = {
    content: ['./app/**/*.tsx', './app/**/*.ts'],
    theme: {
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