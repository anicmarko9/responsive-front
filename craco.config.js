// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Types': path.resolve(__dirname, 'src/types'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Layout': path.resolve(__dirname, 'src/layout'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
