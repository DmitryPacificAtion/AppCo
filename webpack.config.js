const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Tip: Try to use without destructuring, if node -v less then 10
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './frontend/src/index.tsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.join(__dirname, 'dist')),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'sass-loader' },
          { loader: 'required-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.sass', '.js', '.css', '.json'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './frontend/index.html',
      inject: false, // inject --- adds <script> with a bundle automatically, but need to remove this tag in html directly
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false,
    }),
  ],
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: '3000',
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
  },
};