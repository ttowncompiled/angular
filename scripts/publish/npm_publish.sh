#!/bin/bash
set -ex
shopt -s extglob

ROOT_DIR=$(cd $(dirname $0)/../..; pwd)
cd $ROOT_DIR

gulp clean
gulp build.js.prod build.js.dev build.js.cjs

NPM_DIR=$ROOT_DIR/dist/npm
rm -fr $NPM_DIR
FILES='!(test|e2e_test|docs)'

function publishModule {
  NAME=$1
  PUBLISH_DIR=$NPM_DIR/$NAME
  rm -fr $PUBLISH_DIR
  mkdir -p $PUBLISH_DIR

  mkdir -p $PUBLISH_DIR/dev
  cp -r $ROOT_DIR/dist/js/dev/$NAME/$FILES $PUBLISH_DIR/dev
  mkdir -p $PUBLISH_DIR/prod
  cp -r $ROOT_DIR/dist/js/prod/$NAME/$FILES $PUBLISH_DIR/prod
  mkdir -p $PUBLISH_DIR/typescript
  cp -r $ROOT_DIR/modules/$NAME/$FILES $PUBLISH_DIR/typescript

  cp -r $ROOT_DIR/dist/js/cjs/$NAME/$FILES $PUBLISH_DIR

  npm publish $PUBLISH_DIR
}

publishModule angular2
publishModule benchpress
