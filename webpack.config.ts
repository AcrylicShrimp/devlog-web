import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import SveltePreprocess from 'svelte-preprocess';
import type * as webpack from 'webpack';
import 'webpack-dev-server';

const isProduction = process.env.NODE_ENV === 'production';

const config: webpack.Configuration = {
  mode: isProduction ? 'production' : 'development',
  target: 'web',
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  entry: {
    index: path.resolve('app', 'index.ts'),
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.ts', 'svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(?:html|svelte)$/,
        exclude: path.resolve('app', 'index.html'),
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: SveltePreprocess({
              postcss: true,
              typescript: {
                tsconfigFile: path.resolve('tsconfig.json'),
              },
              defaults: {
                script: 'typescript',
                style: 'sass',
              },
            }),
          },
        },
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/img',
                },
              }
            : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/img',
                },
              }
            : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('app', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].[id].css',
    }),
  ],
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: '[name].[contenthash].js',
  },
  devServer: {
    contentBase: path.resolve('dist'),
    port: 8000,
    hot: true,
  },
};

export default config;
