import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatatableRoutingModule } from './datatable-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


@NgModule({
  declarations: [IndexComponent, CreateModalComponent, UpdateModalComponent, DeleteModalComponent],
  imports: [
    CommonModule,
    DatatableRoutingModule
  ]
})
export class DatatableModule { }
