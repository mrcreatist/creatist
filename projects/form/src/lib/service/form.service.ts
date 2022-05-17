import { Injectable } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FORM_TYPE, VALIDATION } from '../enum';
import { FormModel } from '../model';

interface FormItemInterface {
  key: string;
  item: any;
}

@Injectable({
  providedIn: 'root',
})
export class CreatistFormService {
  form: FormGroup;

  constructor() {
    this.form = this.getNewFormGroup();
  }

  generateForm(formConst: FormModel[]) {
    formConst.forEach((item: FormModel) => {
      switch (item.type) {
        case FORM_TYPE.ARRAY: {
          const array = this.getNewFormArray(item);
          this.form.addControl(array.key, array.item);
          break;
        }
        case FORM_TYPE.CONTROL: {
          const control = this.getNewFormControl(item);
          this.form.addControl(control.key, control.item);
          break;
        }
      }
    });
    return this.form;
  }

  getNewFormGroup() {
    return new FormGroup({});
  }

  getNewFormArray(item: FormModel): FormItemInterface {
    const validation = this.getValidations(item.validation);
    const control = new FormArray([], validation);
    const group = this.getNewFormGroup();
    item.value.forEach((formItem: FormModel) => {
      const item = this.getNewFormControl(formItem);
      group.addControl(item.key, item.item);
    });
    control.push(group);
    return <FormItemInterface>{ key: item.key, item: control };
  }

  getNewFormControl(item: FormModel): FormItemInterface {
    const validation = this.getValidations(item.validation);
    const control = new FormControl(item.value, validation);
    return <FormItemInterface>{ key: item.key, item: control };
  }

  getValidations(validations: VALIDATION[]) {
    const response: ValidatorFn[] = [];
    validations.forEach((val) => {
      switch (val) {
        case VALIDATION.REQUIRED: {
          response.push(Validators.required);
          break;
        }
      }
    });
    return response;
  }
}
