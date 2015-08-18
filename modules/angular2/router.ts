/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
export {HashLocationStrategy} from './src/router/hash_location_strategy';
export * from './src/router/route_config_decorator';
export * from './src/router/route_definition';
export {OnActivate, OnDeactivate, OnReuse, CanDeactivate, CanReuse} from './src/router/interfaces';
export {CanActivate} from './src/router/lifecycle_annotations';
export {Instruction, ComponentInstruction, RouteParams} from './src/router/instruction';
export {Url} from './src/router/url_parser';
export {OpaqueToken, Type} from 'angular2/angular2';

import {APP_COMPONENT} from './src/core/application_tokens';
import {bind} from './di';
import {CONST_EXPR} from './src/facade/lang';
import {List} from './src/facade/collection';

// remove when https://github.com/systemjs/systemjs/issues/712 is closed
import * as routerImport from './src/router/router';
import * as outletImport from './src/router/router_outlet';
import * as linkImport from './src/router/router_link';
import * as registryImport from './src/router/route_registry';
import * as html5Import from './src/router/html5_location_strategy';
import * as strategyImport from './src/router/location_strategy';
import * as locationImport from './src/router/location';
import * as pipleinImport from './src/router/pipeline';
export var Router = routerImport.Router;
export var RootRouter = routerImport.RootRouter;
export var RouterOutlet = outletImport.RouterOutlet;
export var RouterLink = linkImport.RouterLink;
export var RouteRegistry = registryImport.RouteRegistry;
export var HTML5LocationStrategy = html5Import.HTML5LocationStrategy;
export var LocationStrategy = strategyImport.LocationStrategy;
export var Location = locationImport.Location;
export var APP_BASE_HREF = locationImport.APP_BASE_HREF;
export var Pipeline = pipleinImport.Pipeline;
export type Router = routerImport.Router;
export type RootRouter = routerImport.RootRouter;
export type RouterOutlet = outletImport.RouterOutlet;
export type RouterLink = linkImport.RouterLink;
export type RouteRegistry = registryImport.RouteRegistry;
export type HTML5LocationStrategy = html5Import.HTML5LocationStrategy;
export type LocationStrategy = strategyImport.LocationStrategy;
export type Location = locationImport.Location;
export type APP_BASE_HREF = locationImport.APP_BASE_HREF;
export type Pipeline = pipleinImport.Pipeline;

export const routerDirectives: List<any> = CONST_EXPR([RouterOutlet, RouterLink]);

export var routerInjectables: List<any> = [
  RouteRegistry,
  Pipeline,
  bind(LocationStrategy).toClass(HTML5LocationStrategy),
  Location,
  bind(Router)
      .toFactory((registry, pipeline, location,
                  appRoot) => { return new RootRouter(registry, pipeline, location, appRoot);},
                 [RouteRegistry, Pipeline, Location, APP_COMPONENT])
];
