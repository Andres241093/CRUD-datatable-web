import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  createFormGroup = new FormGroup({
    description: new FormControl(['',Validators.required]),
    price: new FormControl(['',Validators.required]),
  });

  closeModal(){
  	this.dialogRef.close();
  }

  ngOnInit() {
  }

}
