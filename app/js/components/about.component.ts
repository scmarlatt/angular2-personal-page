import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';

import { htmlTemplate }	from '../templates/about.html';

@Component({
	selector: 'about-landing',
	styleUrls: ['dist/css/component/about.component.css'],
	template: htmlTemplate,
})

export class AboutComponent {
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