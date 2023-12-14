import { FORM_TYPE, VALIDATION } from '../enum';

export interface CreatistFormModel {
  type: FORM_TYPE;
  key: string;
  value: any;
  validation: VALIDATION[];
}
