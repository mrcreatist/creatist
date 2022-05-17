import { FORM_TYPE, VALIDATION } from '../enum';

export interface FormModel {
  type: FORM_TYPE;
  key: string;
  value: any;
  validation: VALIDATION[];
}
