import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CreatistFormService {
  form: FormGroup;

  constructor() {
    this.form = this.getNewFormGroup();
  }

  exportMessage() {
    return 'Hello World';
  }

  generateForm(formConst: any) {
    this.addNewFormControl();
  }

  getNewFormGroup() {
    return new FormGroup({});
  }

  addNewFormControl() {
    this.form.addControl('key', new FormControl(null, []));
  }
}
