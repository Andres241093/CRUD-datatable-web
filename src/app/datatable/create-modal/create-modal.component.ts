import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {

  constructor( 
  	public dialogRef: MatDialogRef<CreateModalComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  closeModal(){
  	this.dialogRef.close();
  }

  ngOnInit() {
  }

}
