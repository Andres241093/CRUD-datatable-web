import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  id: number;

  constructor( 
  	public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private articleS: ArticleService
    ) { this.id = this.data.article_id; }

  deleteArticle(){
    this.articleS.deleteArticle(this.id)
    .subscribe(res=>{
      alert('Artículo eliminado');
    });
    this.closeModal();
  }

  closeModal(){
  	this.dialogRef.close();
  }

  ngOnInit() {
  }

}
