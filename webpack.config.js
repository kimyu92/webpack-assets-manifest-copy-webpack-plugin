const path = require('path');

const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    clean: true,
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    assetModuleFilename: '[name]-[contenthash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: join('svg', '[name]-[contenthash][ext]'),
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.svg'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'assets', 'fonts'), to: 'fonts/[name]-[contenthash][ext]' },
        { from: path.join(__dirname, 'assets', 'svg'), to: 'svg/[name]-[contenthash][ext]' },
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
