import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {

  constructor( 
  	public dialogRef: MatDialogRef<CreateModalComponent>,
    private articleS: ArticleService
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  createFormGroup = new FormGroup({
    description: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
  });

  createArticle(){
    const article = new Article();
    article.description = this.createFormGroup.value.description;
    article.price = this.createFormGroup.value.price;
    this.articleS.createArticle(article)
    .subscribe(res=>{
      alert('Artículo creado');
    });
    this.closeModal();
  }

  closeModal(){
  	this.dialogRef.close();
  }

  ngOnInit() {
  }

}
