/**
 * This indirection is needed to free up Component, etc symbols in the public API
 * to be used by the decorator versions of these annotations.
 */

import {makeDecorator} from 'angular2/src/util/decorators';
import {Promise} from 'angular2/src/facade/async';
import {ComponentInstruction} from 'angular2/src/router/instruction';

// remove when https://github.com/systemjs/systemjs/issues/712 is closed
import * as implImport from './lifecycle_annotations_impl';
export var CanActivateAnnotation = implImport.CanActivate;
export var canReuse = implImport.canReuse;
export var canDeactivate = implImport.canDeactivate;
export var onActivate = implImport.onActivate;
export var onReuse = implImport.onReuse;
export var onDeactivate = implImport.onDeactivate;
export type CanActivateAnnotation = implImport.CanActivate;
export type canReuse = implImport.canReuse;
export type canDeactivate = implImport.canDeactivate;
export type onActivate = implImport.onActivate;
export type onReuse = implImport.onReuse;
export type onDeactivate = implImport.onDeactivate;

/**
 * Defines route lifecycle method [canActivate], which is called by the router to determine
 * if a component can be instantiated as part of a navigation.
 *
 * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
 * This is because [canActivate] is called before the component is instantiated.
 *
 * If `canActivate` returns or resolves to `false`, the navigation is cancelled.
 *
 * If `canActivate` throws or rejects, the navigation is also cancelled.
 *
 * ## Example
 * ```
 * @Directive({
 *   selector: 'control-panel-cmp'
 * })
 * @CanActivate(() => checkIfUserIsLoggedIn())
 * class ControlPanelCmp {
 *   // ...
 * }
 *  ```
 */
export var CanActivate:
    (hook: (next: ComponentInstruction, prev: ComponentInstruction) => Promise<boolean>| boolean) =>
        ClassDecorator = makeDecorator(CanActivateAnnotation);
