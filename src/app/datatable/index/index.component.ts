import {AfterViewInit, Component, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
const COLORS: string[] = [
'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit  {

 displayedColumns: string[] = ['code','description','price','edit','delete'];
 dataSource: MatTableDataSource<UserData>;

 @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
 @ViewChild(MatSort,{static:false}) sort: MatSort;

 constructor(public dialog: MatDialog) {
  // Create 100 users
  const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  // Assign the data to the data source for the table to render
  this.dataSource = new MatTableDataSource(users);
}

openDeleteModal(){
  this.dialog.open(DeleteModalComponent,{
    width: '30vw',
  });
}

openCreateModal(){
  this.dialog.open(CreateModalComponent,{
    width: '50vw',
  });
}

openUpdateModal(){
  this.dialog.open(UpdateModalComponent,{
    width: '50vw',
  });
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
  NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
