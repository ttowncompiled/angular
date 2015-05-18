import {Type} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';

// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
export var __esModule = true;

export type SetterFn = (any) => void;
export type GetterFn = () => any;
export type MethodFn = (any, List) => any;

export interface IReflectionCapabilities {
  factory(type: Type): Function;
  parameters(type: Type): List<List<any>>;
  annotations(type: Type): List<any>;
  getter(name: string): GetterFn;
  setter(name: string): SetterFn;
  method(name: string): MethodFn;
}
