const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        loader: require.resolve('eslint-loader'),
        options: {
            formatter: eslintFormatter,
            eslintPath: require.resolve('eslint'),
            emitWarning: true,
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
