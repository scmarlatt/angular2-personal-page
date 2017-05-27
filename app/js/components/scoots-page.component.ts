import { Component } from '@angular/core';
import { Router }	from '@angular/router';
import { htmlTemplate }	from '../templates/scoots-page.html';
// need simplepost service

@Component({
	selector: 'scoots-page',
	styleUrls: ['dist/css/component/scoots-page.component.css'],
	template: htmlTemplate,
})

export class ScootsPageComponent {
	title = 'scoot_v.1';
	blog: boolean = false;
	about: boolean = false;
	list: boolean = false;
	folio: boolean = false;
	aboutMe: string = `bay area inhabitant with midwest roots. 
					   born and raised in ann arbor, mi. proud michigan alumni. 
					   resume available upon request - scmarlatt15@gmail.com`;
	folioText: string = `if you're here looking at my portfolio this is about it. 
						 this right here is extent to what you seek.. well at least in terms of personal work. 
						 i'm sure you're wondering gee scoot, why bother using such a complex framework for a simple webpage? 
						 and yeah, thats probably more powerful than i need for a simple personal webpage, but who knows where this journey will lead. 
						 for the time being the journey i'm on is to learn angular2.`;

	constructor(
		private router: Router) {
	}

	onSelect(navSelection: string) {
		if (navSelection === "about") {
			this.about = true;
			this.list = false;
			this.folio = false;
			this.blog = false;
		} else if (navSelection === "list") {
			this.about = false;
			this.list = true;
			this.folio = false;
			this.blog = false;
		} else if (navSelection === "blog") {
			this.about = false;
			this.list = false;
			this.folio = false;
			this.blog = true;
		} else {
			this.about = false;
			this.list = false;
			this.folio = true;
			this.blog = false;
		}
	}
}
