const {
  override,
  fixBabelImports,
  addLessLoader,
  addBundleVisualizer,
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
    '@disabled-color': colors.disabled,
  },
};

const bundleOptions = {
  analyzerMode: 'static',
  reportFilename: 'report.html',
};

module.exports = override(
  fixBabelImports('import', antdOptions),
  addLessLoader(loaderOptions),
  addBundleVisualizer(bundleOptions, true),
);
