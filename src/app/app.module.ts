import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

// import { DataService } from './services/dataservice';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableComponent } from './pages/table/table.component';
import { ItemComponent } from './pages/item/item.component';

// const appRoutes = [ { path: 'view/:id', component: ItemComponent }, { path: '/', component: TableComponent } ];

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		HttpClientModule,
		MatButtonModule,
		MatTableModule,
		MatInputModule,
		MatCardModule,
		MatSelectModule,
		BrowserAnimationsModule,
		MatIconModule,
		AppRoutingModule
		// BusyModule,
		//RouterModule.forRoot(appRoutes)
	],
	declarations: [ AppComponent, TableComponent, ItemComponent ],
	// providers: [DataService],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
