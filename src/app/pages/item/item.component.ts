import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Gender } from '../../interfaces/gender';
import { Item } from '../../models/item';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/filter';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: [ './item.component.css' ]
})
export class ItemComponent implements OnInit {
	id: number;
	item: Item;
	form: FormGroup;

	gender: Gender[] = [ { code: 'F', value: 'Female' }, { code: 'M', value: 'Male' } ];
	constructor(private http: HttpClient, private route: ActivatedRoute) {
		this.id = +this.route.snapshot.paramMap.get('id');
		this.http.get<Item[]>('http://127.0.0.1:8887/mock-data.json').subscribe((data) => {
			let items = data as Array<Item>;

			this.item = items.find((i) => i.id === this.id);

			this.initForm(this.item);
		});
	}

	ngOnInit() {}

	initForm(item: Item) {
		console.log('ITEM', item);
		console.log('ITEM', item.last_name);

		let fb = new FormBuilder();

		this.form = fb.group({
			id: [ item.id ],
			first_name: [ item.first_name ],
			last_name: [ item.last_name ],
			gender: [ item.gender ],
			email: [ item.email ],
			colour: [ item.colour ]
		});
	}
}

// console.log('ITEM', this.item);
// 			console.log('ITEM', this.item.last_name);

// 			this.form = fb.group({
// 				id: [ this.id ],
// 				first_name: [ this.item.first_name ],
// 				last_name: [ this.item.last_name ],
// 				gender: [ this.item.gender ],
// 				email: [ this.item.email ],
// 				colour: [ this.item.colour ]
// 			});
