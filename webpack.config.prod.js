// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require("terser-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss"],
    // extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"],
    // fallback: {
    //   "url": require.resolve('url'),
    //   "assert": require.resolve('assert'),
    //   "crypto": require.resolve('crypto-browserify'),
    //   "http": require.resolve('stream-http'),
    //   "https": require.resolve('https-browserify'),
    //   "os": require.resolve('os-browserify/browser'),
    //   "buffer": require.resolve('buffer'),
    //   "stream": require.resolve('stream-browserify')
    // },
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        // use: ["babel-loader", "eslint-loader"],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // {
      //   test: /\.tsx?$/,
      //   use: ["ts-loader"],
      //   exclude: /node_modules/,
      // },

      // addition - add source-map support
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   use: ["source-map-loader"],
      // },
      // {
      //   test: /\.(sc|sa|c)ss$/i,
      //   use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      // },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          // {
          //   // inject CSS to page
          //   loader: "style-loader",
          // },
          MiniCssExtractPlugin.loader,
          {
            // translates CSS into CommonJS modules
            loader: "css-loader",
          },
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                // plugins: function () {
                //   return [require("autoprefixer")];
                // },
                plugins: ["autoprefixer"],
              },
            },
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       outputPath: "imgs",
        //     },
        //   },
        //   {
        //     loader: "image-webpack-loader",
        //     options: {
        //       bypassOnDebug: true,
        //       disable: true,
        //     },
        //   },
        // ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        // type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              // name: "[contenthash].[ext]",
              name: "[name].[ext]",
              outputPath: "GuidedRisk/fonts", // where the fonts will go
              // publicPath: '/buildframework/Fonts/',
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    // minimizer: [],
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      files: 'src/**/*.js',
      "overrideConfig": {
        "extends": "eslint:recommended",
        "rules": { }
      }
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
    // new webpack.ProvidePlugin({
    //   process: 'process/browser',
    //   Buffer: ['buffer', 'Buffer'],

    // }),
  ],
};
