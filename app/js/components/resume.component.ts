import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';

import { htmlTemplate }	from '../templates/resume.html';

@Component({
	selector: 'resume',
	styleUrls: ['dist/css/component/resume.component.css'],
	template: htmlTemplate,
})

export class ResumeComponent {
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