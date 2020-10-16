import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {

  @Input() article:any;

  constructor( 
  	public dialogRef: MatDialogRef<UpdateModalComponent>,
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
