'use strict'


const path = require('path');
const webpack = require("webpack");
const { VueLoaderPlugin } = require('vue-loader');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
	// mode: "development || "production",
    resolve: {
        extensions: ['.js', '.vue', '.css']
    },
	entry: [
        "cronstrue",
        "csvtojson",
        "eventsource",
        "file-saver",
        "highcharts",
        "highcharts/modules/stock",
        "highcharts/modules/exporting",
        "json-pointer",
        "jsonlint-mod",
        "vue-codemirror",
        "codemirror/lib/codemirror.css",
        "codemirror/mode/javascript/javascript.js",
        "codemirror/addon/edit/matchbrackets.js",
        "codemirror/addon/edit/closebrackets.js",
        "codemirror/addon/fold/foldcode.js",
        "codemirror/addon/fold/foldgutter.js",
        "codemirror/addon/fold/foldgutter.css",
        "codemirror/addon/fold/brace-fold.js",
        "codemirror/addon/lint/lint.js",
        "codemirror/addon/lint/lint.css",
        "vue-highcharts",
        "vue-markdown",
        "vuelidate",
        "axios",
        "lodash"
    ],
	output: {
		filename: "vendor.js",
        path: path.resolve(__dirname, "dist"),
		library: "vendor_lib_[hash]"
	},
    module: {
        rules: [
          {
            test: /\.vue$/,
            use: 'vue-loader'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.styl(us)?$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'stylus-loader'
            ]
          }
        ]
    },
	plugins: [
    new VueLoaderPlugin(),
		new webpack.DllPlugin({
      name: "vendor_lib_[hash]",
			path: path.resolve(__dirname, "dist/vendor-manifest.json")
		}),
    new BundleAnalyzerPlugin()
	]
};
