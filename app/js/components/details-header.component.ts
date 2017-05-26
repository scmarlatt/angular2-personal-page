import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';

import { htmlTemplate }	from '../templates/details-header.html';

@Component({
	selector: 'details-header',
	styleUrls: ['dist/css/component/header.component.css'],
	template: htmlTemplate,
})

export class DetailsHeaderComponent {
	aboutMe: string;

	constructor(
		private router: Router) {
	}

	/*
	getPostList(): void {
		this.blogService.getPosts().then(blogPostList => this.wantList = wantList);
	}
	*/

	/*
	getPostDetails(selectedItem: blogPostId): void {
		this.blogService.getPostData(id).then(blogData =? this.data = postData);
	}
	*/

	
}