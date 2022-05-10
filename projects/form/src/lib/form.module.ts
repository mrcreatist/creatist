import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { service } from './declarations';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  providers: service,
})
export class CreatistFormModule {}
