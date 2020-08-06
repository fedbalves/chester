const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin({ branch: true });

module.exports = (env) => ({
  entry: './src/index.tsx',

  output: {
    filename: '[git-revision-BRANCH]-[git-revision-VERSION].js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devServer: {
    compress: true,
    port: 8081,
    contentBase: './public',
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    open: false,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: `./.env.${env.NODE_ENV}`,
      safe: true,
      silent: true,
    }),

    gitRevisionPlugin,

    new webpack.DefinePlugin({
      VERSION: JSON.stringify(gitRevisionPlugin.version()),
      COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
      BRANCH: JSON.stringify(gitRevisionPlugin.branch()),
    }),

    new HtmlWebpackPlugin({
      title: 'FanáticoFC',
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
});
