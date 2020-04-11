const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    app: ['./src/index.ts'],
    vendor: ['@babel/polyfill', 'react'],
    home: ['./src/routes/home/client-script.tsx']
  },
  externals: {
    'express': 'commonjs express'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin([{
      from: 'src/view-templates',
      to: 'view-templates'
    }])
  ]
}