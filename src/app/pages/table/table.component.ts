import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../models/item';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.css' ]
})
export class TableComponent implements OnInit {
	retrievedData: Item[] = [];
	loading = true;
	displayedColumns: string[] = [ 'first_name', 'last_name', 'action' ];

	constructor(private httpClient: HttpClient) {}

	ngOnInit() {
		this.loadData();
	}

	loadData() {
		setTimeout(() => {
			try {
				this.httpClient.get<Item[]>('http://127.0.0.1:8887/mock-data.json').subscribe((a) => {
					this.retrievedData = a;
				});
			} finally {
				this.loading = false;
			}
		}, 500);
	}
}
