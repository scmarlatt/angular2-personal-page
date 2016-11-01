import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';

@Component({
	selector: 'about-landing',
	styleUrls: ['app/scoots-page/about/about.component.css'],
	templateUrl: 'app/scoots-page/about/about.component.html'
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