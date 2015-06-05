Benchpress - a framework for e2e performance tests
=========

The sources for this package are in the main [Angular2](https://github.com/angular/angular) repo. Please file issues and pull requests against that repo.

This package contains different sources for different users:

1. The files located in the root folder can be consumed using CommonJS
2. The files have been transpiled to es5 using the typescript compiler. This contains:
    * `dev/`: a development version that includes runtime type assertions
    * `prod/`: a production version that does not include runtime type assertions
3. The files under `/typescript` are the TypeScript source files

License: Apache MIT 2.0
