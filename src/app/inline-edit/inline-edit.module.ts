import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  declarations: [InlineEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
  	InlineEditComponent
  ]
})
export class InlineEditModule { }
