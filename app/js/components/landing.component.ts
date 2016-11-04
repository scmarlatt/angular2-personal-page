import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';

import { htmlTemplate }	from '../templates/landing.html';

@Component({
	selector: 'landing',
	styleUrls: ['dist/css/component/landing.component.css'],
	template: htmlTemplate,
})

export class LandingComponent {
	item: string;

	constructor(
		private router: Router) {
	}

	onSelect(item): void{
		this.router.navigate([item + '/']);
	};

	/*
	ngOnInit(): void {
	}
	*/
}