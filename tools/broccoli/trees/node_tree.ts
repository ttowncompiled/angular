'use strict';

import destCopy from '../broccoli-dest-copy';
import compileWithTypescript from '../broccoli-typescript';
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');
var renderLodashTemplate = require('broccoli-lodash');
var replace = require('broccoli-replace');
var stew = require('broccoli-stew');

var projectRootDir = path.normalize(path.join(__dirname, '..', '..', '..', '..'));


module.exports = function makeNodeTree(destinationPath) {
  // list of npm packages that this build will create
  var outputPackages = ['angular2', 'benchpress'];

  var modulesTree = new Funnel('modules', {
    include: ['angular2/**', 'benchpress/**', '**/e2e_test/**'],
    exclude: [
      // the following code and tests are not compatible with CJS/node environment
      'angular2/test/core/zone/**',
      'angular2/test/test_lib/fake_async_spec.ts',
      'angular2/test/services/xhr_impl_spec.ts',
      'angular2/test/forms/**'
    ]
  });

  var nodeTree = compileWithTypescript(modulesTree, {
    allowNonTsExtensions: false,
    emitDecoratorMetadata: true,
    declaration: true,
    mapRoot: '', /* force sourcemaps to use relative path */
    module: 'commonjs',
    noEmitOnError: true,
    rootDir: '.',
    rootFilePaths: ['angular2/globals.d.ts'],
    sourceMap: true,
    sourceRoot: '.',
    target: 'ES5'
  });

  // Now we add the LICENSE file into all the folders that will become npm packages
  outputPackages.forEach(function(destDir) {
    var license = new Funnel('.', {files: ['LICENSE'], destDir: destDir});
    nodeTree = mergeTrees([nodeTree, license]);
  });

  // Get all docs and related assets and prepare them for js build
  var docs = new Funnel(modulesTree, {include: ['**/*.md', '**/*.png'], exclude: ['**/*.dart.md']});
  docs = stew.rename(docs, 'README.js.md', 'README.md');

  // Generate shared package.json info
  var BASE_PACKAGE_JSON = require(path.join(projectRootDir, 'package.json'));
  var COMMON_PACKAGE_JSON = {
    version: BASE_PACKAGE_JSON.version,
    homepage: BASE_PACKAGE_JSON.homepage,
    bugs: BASE_PACKAGE_JSON.bugs,
    license: BASE_PACKAGE_JSON.license,
    contributors: BASE_PACKAGE_JSON.contributors,
    dependencies: BASE_PACKAGE_JSON.dependencies,
    devDependencies: {
      "yargs": BASE_PACKAGE_JSON.devDependencies['yargs'],
      "gulp-sourcemaps": BASE_PACKAGE_JSON.devDependencies['gulp-sourcemaps'],
      "gulp": BASE_PACKAGE_JSON.devDependencies['gulp'],
      "gulp-rename": BASE_PACKAGE_JSON.devDependencies['gulp-rename'],
      "through2": BASE_PACKAGE_JSON.devDependencies['through2']
    }
  };

  // Add a .template extension since renderLodashTemplate strips one extension
  var packageJsons = stew.rename(new Funnel(modulesTree, {include: ['**/package.json']}), '.json',
                                 '.json.template');
  packageJsons = renderLodashTemplate(
      packageJsons, {files: ["**/**"], context: {'packageJson': COMMON_PACKAGE_JSON}});


  nodeTree = mergeTrees([nodeTree, docs, packageJsons]);

  // Transform all tests to make them runnable in node
  nodeTree = replace(nodeTree, {
    files: ['**/test/**/*_spec.js'],
    replaceWithPath: function(path, content) {
      return "var parse5Adapter = require('angular2/src/dom/parse5_adapter'); " +
             "parse5Adapter.Parse5DomAdapter.makeCurrent();" + content;
    },
    patterns: [
      {
        // Append main() to all tests since all of our tests are wrapped in exported main fn
        match: /$/g,
        replacement: "\r\n main();"
      }
    ]
  });

  return destCopy(nodeTree, destinationPath);
};
