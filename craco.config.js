/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const {
  compilerOptions: { paths },
} = require('./tsconfig.json');

const resolvePaths = (pathsObj) => {
  return Object.keys(pathsObj).reduce(
    (all, alias) => ({
      ...all,
      [alias.replace('/*', '')]: path.resolve(
        __dirname,
        paths[alias][0].replace('/*', '')
      ),
    }),
    {}
  );
};

module.exports = {
  webpack: {
    alias: resolvePaths(paths),
  },
};
