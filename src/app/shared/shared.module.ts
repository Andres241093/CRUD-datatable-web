import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const Modules:Array<any>=[
	MaterialModule,
	FlexLayoutModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Modules
  ],
  exports: [
  	Modules
  ]
})
export class SharedModule { }
