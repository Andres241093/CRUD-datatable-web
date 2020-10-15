import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {

  constructor( 
  	public dialogRef: MatDialogRef<UpdateModalComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  closeModal(){
  	this.dialogRef.close();
  }

  ngOnInit() {
  }

}
