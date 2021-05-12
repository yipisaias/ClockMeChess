const {
  override,
  fixBabelImports,
  addLessLoader,
  addBundleVisualizer,
  // addWebpackModuleRule,
} = require('customize-cra');
const colors = require('./src/utils/colors');

const antdOptions = {
  libraryName: 'antd',
  libraryDirectory: 'es',
  style: true,
};

const loaderOptions = {
  javascriptEnabled: true,
  modifyVars: {
    '@primary-color': colors.primary,
    '@default-color': colors.default,
  },
};

const bundleOptions = {
  analyzerMode: 'static',
  reportFilename: 'report.html',
};

/* const webpackOptions = [
  {
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader?modules' },
      { loader: 'postcss-loader' },
      { loader: 'less-loader' },
    ],
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'postcss-loader' },
    ],
  },
]; */

module.exports = override(
  fixBabelImports('import', antdOptions),
  addLessLoader(loaderOptions),
  addBundleVisualizer(bundleOptions, true),
  // webpackOptions.forEach(rule => addWebpackModuleRule(rule)),
);
