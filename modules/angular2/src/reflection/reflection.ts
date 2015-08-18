import {Type, isPresent} from 'angular2/src/facade/lang';
import {List, ListWrapper} from 'angular2/src/facade/collection';
import * as reflectorImport from './reflector';
import {ReflectionCapabilities} from './reflection_capabilities';

// remove when https://github.com/systemjs/systemjs/issues/712 is closed
export var ReflectionInfo = reflectorImport.ReflectionInfo;
export var Reflector = reflectorImport.Reflector;
export type ReflectionInfo = reflectorImport.ReflectionInfo;
export type Reflector = reflectorImport.Reflector;

export var reflector = new Reflector(new ReflectionCapabilities());