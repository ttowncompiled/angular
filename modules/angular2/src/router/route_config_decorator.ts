import {makeDecorator} from 'angular2/src/util/decorators';
import {List} from 'angular2/src/facade/collection';

// remove when https://github.com/systemjs/systemjs/issues/712 is closed
import * as implImport from './route_config_impl';
export var RouteConfigAnnotation = implImport.RouteConfig; 
export var Route = implImport.Route;
export var Redirect = implImport.Redirect;
export var AuxRoute= implImport.AuxRoute;
export var AsyncRoute = implImport.AsyncRoute;
export var RouteDefinition = implImport.RouteDefinition;
export var ROUTE_DATA = implImport.ROUTE_DATA;
export type RouteConfigAnnotation = implImport.RouteConfig; 
export type Route = implImport.Route;
export type Redirect = implImport.Redirect;
export type AuxRoute= implImport.AuxRoute;
export type AsyncRoute = implImport.AsyncRoute;
export type RouteDefinition = implImport.RouteDefinition;
export type ROUTE_DATA = implImport.ROUTE_DATA;

export var RouteConfig: (configs: List<RouteDefinition>) => ClassDecorator =
    makeDecorator(RouteConfigAnnotation);
