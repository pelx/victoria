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
	isFinished: boolean;

	constructor(private httpClient: HttpClient) {}

	ngOnInit() {
		setTimeout(() => {
			this.httpClient.get<Item[]>('http://127.0.0.1:8887/mock-data.json').subscribe((a) => {
				this.retrievedData = a;
			});
		}, 5);
		this.isFinished = true;
	}
}
