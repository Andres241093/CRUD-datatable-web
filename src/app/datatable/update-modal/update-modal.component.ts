import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {

  article: any;

  constructor( 
  	public dialogRef: MatDialogRef<UpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private articleS: ArticleService
    ) { 
      this.article = this.data.article; 
      this.setValues();
    }

  updateFormGroup = new FormGroup({
    description: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
  });

  setValues(){
    this.updateFormGroup.patchValue({
      description: this.article.description,
      price: this.article.price
    });
  }

  updateArticle(){
    const article = new Article();
    article.description = this.updateFormGroup.value.description;
    article.price = this.updateFormGroup.value.price;
    this.articleS.updateArticle(article,this.article.code)
    .subscribe(res=>{
      alert('Artículo modificado');
    });
    this.closeModal();
  }

  closeModal(){
  	this.dialogRef.close();
  }

  ngOnInit() {
  }

}
