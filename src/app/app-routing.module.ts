import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { TableComponent } from './pages/table/table.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
	{ path: '', component: TableComponent },
	{ path: 'item', component: ItemComponent },
	{ path: 'item/:id', component: ItemComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
