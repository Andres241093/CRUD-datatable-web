import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./datatable/datatable.module').then(m => m.DatatableModule)
	},
	{path:'**', redirectTo: '/home/index'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
