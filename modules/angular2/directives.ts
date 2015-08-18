/**
 * @module
 * @description
 * Common directives shipped with Angular.
 */

import {CONST_EXPR, Type} from './src/facade/lang';

export * from './src/directives/ng_style';

// remove when https://github.com/systemjs/systemjs/issues/712 is closed
import * as ngClassImport from './src/directives/ng_class';
import * as ngForImport from './src/directives/ng_for';
import * as ngIfImport from './src/directives/ng_if';
import * as ngNonImport from './src/directives/ng_non_bindable';
import * as ngSwitchImport from './src/directives/ng_switch';
export var NgClass = ngClassImport.NgClass;
export var NgFor = ngForImport.NgFor;
export var RecordViewTuple = ngForImport.RecordViewTuple;
export var NgIf = ngIfImport.NgIf; 
export var NgNonBindable = ngNonImport.NgNonBindable;
export var NgSwitch = ngSwitchImport.NgSwitch;
export var NgSwitchWhen = ngSwitchImport.NgSwitchWhen;
export var NgSwitchDefault = ngSwitchImport.NgSwitchDefault;
export type NgClass = ngClassImport.NgClass;
export type NgFor = ngForImport.NgFor;
export type RecordViewTuple = ngForImport.RecordViewTuple;
export type NgIf = ngIfImport.NgIf; 
export type NgNonBindable = ngNonImport.NgNonBindable;
export type NgSwitch = ngSwitchImport.NgSwitch;
export type NgSwitchWhen = ngSwitchImport.NgSwitchWhen;
export type NgSwitchDefault = ngSwitchImport.NgSwitchDefault;

/**
 * A collection of the Angular core directives that are likely to be used in each and every Angular
 * application.
 *
 * This collection can be used to quickly enumerate all the built-in directives in the `@View`
 * annotation. For example,
 * instead of writing:
 *
 * ```
 * import {If, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/angular2';
 * import {OtherDirective} from 'myDirectives';
 *
 * @Component({
 *  selector: 'my-component'
 * })
 * @View({
 *   templateUrl: 'myComponent.html',
 *   directives: [If, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault, OtherDirective]
 * })
 * export class MyComponent {
 *   ...
 * }
 * ```
 * one could enumerate all the core directives at once:
 *
 * ```
 * import {coreDirectives} from 'angular2/angular2';
 * import {OtherDirective} from 'myDirectives';
 *
 * @Component({
 *  selector: 'my-component'
 * })
 * @View({
 *   templateUrl: 'myComponent.html',
 *   directives: [coreDirectives, OtherDirective]
 * })
 * export class MyComponent {
 *   ...
 * }
 * ```
 *
 */
export const CORE_DIRECTIVES: List<Type> =
    CONST_EXPR([NgClass, NgFor, NgIf, NgNonBindable, NgSwitch, NgSwitchWhen, NgSwitchDefault]);
