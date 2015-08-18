/**
 * @module
 * @description
 * The http module provides services to perform http requests. To get started, see the {@link Http}
 * class.
 */
import {bind, Binding} from 'angular2/di';

import {BrowserJsonp} from 'http/src/backends/browser_jsonp';
export {MockConnection, MockBackend} from 'http/src/backends/mock_backend';
export {Request} from 'http/src/static_request';
export {Response} from 'http/src/static_response';
export {Headers} from 'http/src/headers';
export {
  ResponseTypes,
  ReadyStates,
  RequestMethods,
  RequestCredentialsOpts,
  RequestCacheOpts,
  RequestModesOpts
} from './src/enums';
export {URLSearchParams} from './src/url_search_params';

// remove when https://github.com/systemjs/systemjs/issues/712 is closed
import {Injector} from 'angular2/angular2';
import * as httpImport from 'http/src/http';
import * as browserImport from 'http/src/backends/browser_xhr';
import * as interfacesImport from 'http/src/interfaces';
import * as xhrImport from 'http/src/backends/xhr_backend';
import * as jsonpImport from 'http/src/backends/jsonp_backend';
import * as requestImport from 'http/src/base_request_options';
import * as responseImport from 'http/src/base_response_options';
export type RequestOptionsArgs = interfacesImport.RequestOptionsArgs;
export type ResponseOptionsArgs = interfacesImport.ResponseOptionsArgs;
export var Connection = interfacesImport.Connection;
export var ConnectionBackend = interfacesImport.ConnectionBackend;
export var BrowserXhr = browserImport.BrowserXhr;
export var BaseRequestOptions = requestImport.BaseRequestOptions;
export var RequestOptions = requestImport.RequestOptions;
export var BaseResponseOptions = responseImport.BaseResponseOptions;
export var ResponseOptions = responseImport.ResponseOptions;
export var XHRBackend = xhrImport.XHRBackend;
export var XHRConnection = xhrImport.XHRConnection;
export var JSONPBackend = jsonpImport.JSONPBackend;
export var JSONPConnection = jsonpImport.JSONPConnection;
export var Http = httpImport.Http;
export var Jsonp = httpImport.Jsonp;
export type Connection = interfacesImport.Connection;
export type ConnectionBackend = interfacesImport.ConnectionBackend;
export type BrowserXhr = browserImport.BrowserXhr;
export type BaseRequestOptions = requestImport.BaseRequestOptions;
export type RequestOptions = requestImport.RequestOptions;
export type BaseResponseOptions = responseImport.BaseResponseOptions;
export type ResponseOptions = responseImport.ResponseOptions;
export type XHRBackend = xhrImport.XHRBackend;
export type XHRConnection = xhrImport.XHRConnection;
export type JSONPBackend = jsonpImport.JSONPBackend;
export type JSONPConnection = jsonpImport.JSONPConnection;
export type Http = httpImport.Http;
export type Jsonp = httpImport.Jsonp;

/**
 * Provides a basic set of injectables to use the {@link Http} service in any application.
 *
 * #Example
 *
 * ```
 * import {HTTP_BINDINGS, Http} from 'http/http';
 * @Component({selector: 'http-app', viewBindings: [HTTP_BINDINGS]})
 * @View({template: '{{data}}'})
 * class MyApp {
 *   constructor(http:Http) {
 *     http.request('data.txt').subscribe(res => this.data = res.text());
 *   }
 * }
 * ```
 *
 */
export const HTTP_BINDINGS: List<any> = [
  bind(ConnectionBackend)
      .toClass(XHRBackend),
  BrowserXhr,
  bind(RequestOptions).toClass(BaseRequestOptions),
  bind(ResponseOptions).toClass(BaseResponseOptions),
  Http
];

export const JSONP_BINDINGS: List<any> = [
  bind(ConnectionBackend)
      .toClass(JSONPBackend),
  BrowserJsonp,
  bind(RequestOptions).toClass(BaseRequestOptions),
  bind(ResponseOptions).toClass(BaseResponseOptions),
  Jsonp
];

/**
 * TODO(jeffbcross): export each as their own top-level file, to require as:
 * require('http/http'); require('http/jsonp');
 */
export var http = Injector.resolveAndCreate([HTTP_BINDINGS]).get(Http);
export var jsonp = Injector.resolveAndCreate([JSONP_BINDINGS]).get(Jsonp);