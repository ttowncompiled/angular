import {Type, CONST_EXPR} from 'angular2/src/facade/lang';
export {NgControl} from './directives/ng_control';
export {ControlValueAccessor} from './directives/control_value_accessor';

// remove when https://github.com/systemjs/systemjs/issues/712 is closed
import * as nameImport from './directives/ng_control_name';
import * as controlImport from './directives/ng_form_control';
import * as groupImport from './directives/ng_control_group';
import * as formModelImport from './directives/ng_form_model';
import * as formImport from './directives/ng_form';
import * as checkImport from './directives/checkbox_value_accessor';
import * as selectImport from './directives/select_control_value_accessor';
import * as modelImport from './directives/ng_model';
import * as defaultImport from './directives/default_value_accessor';
import * as requireImport from './directives/validators';
export var NgControlName = nameImport.NgControlName;
export var NgFormControl = controlImport.NgFormControl;
export var NgModel = modelImport.NgModel;
export var NgControlGroup = groupImport.NgControlGroup;
export var NgFormModel = formModelImport.NgFormModel;
export var NgForm = formImport.NgForm;
export var DefaultValueAccessor = defaultImport.DefaultValueAccessor;
export var CheckboxControlValueAccessor = checkImport.CheckboxControlValueAccessor;
export var SelectControlValueAccessor = selectImport.SelectControlValueAccessor;
export var NgSelectOption = selectImport.NgSelectOption;
export var NgValidator = requireImport.NgValidator;
export var NgRequiredValidator = requireImport.NgRequiredValidator;
export type NgControlName = nameImport.NgControlName;
export type NgFormControl = controlImport.NgFormControl;
export type NgModel = modelImport.NgModel;
export type NgControlGroup = groupImport.NgControlGroup;
export type NgFormModel = formModelImport.NgFormModel;
export type NgForm = formImport.NgForm;
export type DefaultValueAccessor = defaultImport.DefaultValueAccessor;
export type CheckboxControlValueAccessor = checkImport.CheckboxControlValueAccessor;
export type SelectControlValueAccessor = selectImport.SelectControlValueAccessor;
export type NgSelectOption = selectImport.NgSelectOption;
export type NgValidator = requireImport.NgValidator;
export type NgRequiredValidator = requireImport.NgRequiredValidator;

/**
 *
 * A list of all the form directives used as part of a `@View` annotation.
 *
 *  This is a shorthand for importing them each individually.
 */
export const FORM_DIRECTIVES: List<Type> = CONST_EXPR([
  NgControlName,
  NgControlGroup,

  NgFormControl,
  NgModel,
  NgFormModel,
  NgForm,

  NgSelectOption,
  DefaultValueAccessor,
  CheckboxControlValueAccessor,
  SelectControlValueAccessor,

  NgRequiredValidator
]);
