import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';

import { htmlTemplate }	from '../templates/climate.html';


@Component({
	selector: 'climate-landing',
	styleUrls: ['dist/css/component/climate.component.css'],
	template: htmlTemplate,
})

export class ClimateComponent {
	errorMessage: string;

	constructor(
		private router: Router) {
	}

	ngOnInit(): void{
		//this.getBlogFromServer();
	}
	
	/*
	getPostDetails(selectedItem: blogPostId): void {
		this.blogService.getPostData(id).then(blogData =? this.data = postData);
	}
	*/	
}