import { OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '../model';
import { ControlContainer } from './control_container';
import { Form } from './form_interface';
import { AsyncValidatorFn, ValidatorFn } from './validators';
/**
  This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
 */
export declare class AbstractFormGroupDirective extends ControlContainer implements OnInit, OnDestroy {
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Get the {@link FormGroup} backing this binding.
     */
    readonly control: FormGroup;
    /**
     * Get the path to this control group.
     */
    readonly path: string[];
    /**
     * Get the {@link Form} to which this group belongs.
     */
    readonly formDirective: Form;
    readonly validator: ValidatorFn;
    readonly asyncValidator: AsyncValidatorFn;
}
