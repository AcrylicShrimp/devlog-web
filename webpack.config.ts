import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import type * as webpack from 'webpack';
import 'webpack-dev-server';

const isProduction = process.env.NODE_ENV === 'production';

const config: webpack.Configuration = {
  mode: isProduction ? 'production' : 'development',
  target: 'web',
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  entry: {
    index: path.resolve('app', 'index.csr.ts'),
    'ssr-index': path.resolve('app', 'index.ssr.ts'),
  },
  resolve: {
    alias: {
      app: path.resolve('app'),
      fragments: path.resolve('app', 'fragments'),
      font: path.resolve('app', 'res', 'font'),
      img: path.resolve('app', 'res', 'img'),
      styles: path.resolve('app', 'styles'),
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(?:html|svelte)$/,
        include: [path.resolve('app'), path.resolve('node_modules', 'svelte'), path.resolve('node_modules', '@roxi', 'routify')],
        exclude: [path.resolve('app', 'index.html')],
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            compilerOptions: {
              hydratable: true,
              dev: !isProduction,
            },
            preprocess: sveltePreprocess({
              postcss: true,
              typescript: {
                tsconfigFile: path.resolve('tsconfig.json'),
              },
            }),
          },
        },
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
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
              }
            : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:png|svg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[hash][ext][query]',
        },
      },
      {
        test: /\.woff2?$/i,
        type: 'asset',
        generator: {
          filename: 'font/[hash][ext][query]',
        },
      },
    ],
  },
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('app', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[contenthash].[id].css',
    }),
  ],
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].[id].js',
  },
  devServer: {
    historyApiFallback: true,
    port: 8000,
    hot: true,
    open: true,
    static: 'dist',
  },
};

export default config;
