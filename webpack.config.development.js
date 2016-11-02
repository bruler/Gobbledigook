/* eslint-disable max-len */
/**
 * Build config for development process that uses Hot-Module-Replacement
 * https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
 */

import webpack from 'webpack';
import validate from 'webpack-validator';
import merge from 'webpack-merge';
import formatter from 'eslint-formatter-pretty';
import baseConfig from './webpack.config.base';

const port = process.env.PORT || 3000;

var lib_dir = __dirname + '/public/libraries',
  node_dir = __dirname + '/node_modules',
  bower_dir = __dirname + '/bower_components',
  plugins_dir = __dirname + '/public/plugins';


export default validate(merge(baseConfig, {
  debug: true,

  devtool: 'cheap-module-eval-source-map',

  resolve: {
    alias: {
      react: node_dir + '/react',
      reactDom: lib_dir + '/react-dom',
      jquery: lib_dir + '/jQuery-2.1.4.min.js',
      velocity: lib_dir + '/velocity.min.js',
      jqueryUi: plugins_dir + '/jQueryUI/jquery-ui.min.js',
      bootstrap: plugins_dir + '/bootstrap/js/bootstrap.min.js',
      //eve: node_dir + '/raphael/eve/eve.js',
      raphael: node_dir + '/raphael/raphael.js',
      morris: plugins_dir + '/morris/morris.js',
      //sparkline: plugins_dir + '/sparkline/jquery.sparkline.min.js',
      jvectormap: plugins_dir + '/jvectormap/jquery-jvectormap-1.2.2.min.js',
      jvectormapWorld: plugins_dir + '/jvectormap/jquery-jvectormap-world-mill-en.js',
      //knob: plugins_dir + '/knob/jquery.knob.js',
      moment: plugins_dir + '/moment/moment.js',
      //daterangepicker: plugins_dir + '/daterangepicker/daterangepicker.js',
      bootstrapDatepicker: plugins_dir + '/datepicker/bootstrap-datepicker.js',
      //bootstrapWysihtml5: plugins_dir + '/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js',
      slimscroll: plugins_dir + '/slimScroll/jquery.slimscroll.min.js',
      fastclick: plugins_dir + '/fastclick/fastclick.min.js',
    }
  },

  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
    'babel-polyfill',
    './app/index'
  ],

  output: {
    publicPath: `http://localhost:${port}/dist/`
  },

  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },

      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },

  eslint: {
    formatter
  },

  plugins: [
    // https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
    new webpack.HotModuleReplacementPlugin(),

    // “If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin.”
    // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
    new webpack.NoErrorsPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  // https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
  target: 'electron-renderer'
}));
