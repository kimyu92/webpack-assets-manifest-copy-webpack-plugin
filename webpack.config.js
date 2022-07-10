const path = require('path');

const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    assetModuleFilename: '[name][ext]',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'assets', 'fonts'), to: 'fonts' },
        { from: path.join(__dirname, 'assets', 'svg'), to: 'svg' },
      ],
    }),
    new WebpackAssetsManifest({
      entrypoints: true,
      publicPath: true,
      output: 'manifest.json',
      writeToDisk: true,
      publicPath: true,
      entrypointsUseAssets: true,
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3035,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    devMiddleware: {
      publicPath: 'assets',
      writeToDisk: true,
    },
  },
};
