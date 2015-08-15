import {Type, isPresent} from 'angular2/src/facade/lang';
import {List, ListWrapper} from 'angular2/src/facade/collection';
import * as importer from './reflector';
import {ReflectionCapabilities} from './reflection_capabilities';

export class Reflector extends importer.Reflector {
  constructor(reflectionCapabilities: importer.PlatformReflectionCapabilities) {
    super(reflectionCapabilities);
  }
}

export class ReflectionInfo extends importer.ReflectionInfo {
  constructor(annotations?: List<any>, parameters?: List<List<any>>, factory?: Function,
              interfaces?: List<any>) {
    super(annotations, parameters, factory, interfaces);
  }
}

export var reflector = new Reflector(new ReflectionCapabilities());
