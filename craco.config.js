// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Types': path.resolve(__dirname, 'src/types'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Fonts': path.resolve(__dirname, 'src/fonts'),
    },
  },
};
