const webpack = require('webpack');

module.exports = {
  // ... other webpack configurations

  resolve: {
    fallback: {
      process: require.resolve('process/browser'),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
