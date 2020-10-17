import {OnInit, Component, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';
import { finalize } from 'rxjs/operators';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit  {


 articleList: Array<Article> = [];
 displayedColumns: string[] = ['code','description','price','edit','delete'];
 dataSource: MatTableDataSource<Article>;

 @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
 @ViewChild(MatSort,{static:false}) sort: MatSort;

 constructor(public dialog: MatDialog,private articleS: ArticleService) {

  this.articleS.getArticles()
  .pipe(finalize(()=> {
    this.dataSource = new MatTableDataSource(this.articleList)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }))
  .subscribe(res=>{
    res.map(data=>{
      const article = new Article();
      article.code = data['id'];
      article.description = data['description'];
      article.price = data['price'];
      this.articleList.push(article);
    });
  });
}

openDeleteModal(id){
  this.dialog.open(DeleteModalComponent,{ //30vw
    data: {
      article_id: id
    }
  });
}

openCreateModal(){
  this.dialog.open(CreateModalComponent,{
    width: '50vw',
  });
}

openUpdateModal(data){
  this.dialog.open(UpdateModalComponent,{//50vw
    data: {
      article: data
    }
  });
}

ngOnInit() {

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
