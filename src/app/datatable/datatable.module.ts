import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';

import { DatatableRoutingModule } from './datatable-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

const Modules:Array<any>=[
	DatatableRoutingModule,
	MatTableModule,
	AppSharedModule,
	MatFormFieldModule,
	MatInputModule,
	MatPaginatorModule,
	MatDialogModule
];

const Components:Array<any>=[
	IndexComponent, 
	CreateModalComponent, 
	UpdateModalComponent, 
	DeleteModalComponent
];

@NgModule({
  declarations: [Components],
  imports: [
    CommonModule,
    Modules
  ]
})
export class DatatableModule { }
