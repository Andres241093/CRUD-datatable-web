import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';

const Modules:Array<any>=[
	MatButtonModule
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
export class MaterialModule { }
