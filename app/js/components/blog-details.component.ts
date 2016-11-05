import { Component, OnInit }	from '@angular/core';
import { Router, ActivatedRoute, Params }		from '@angular/router';
import { BlogPost }	from './models/blog-post';
import { BlogService } from '../services/blog.service';

import { htmlTemplate }	from '../templates/blog-details.html';

@Component({
	selector: 'blog-details',
	styleUrls: ['dist/css/component/blog-details.component.css'],
	template: htmlTemplate,
})

export class BlogDetailsComponent {
	aboutMe: string;
	viewingBlogPost: boolean = false;
	selectedBlogPost: BlogPost;
	id: number;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private blogService: BlogService) {
	}

	ngOnInit(): void {
		this.selectedBlogPost = {
			id: -1,
			title: "",
			img: "",
			body: "",
		};
		this.route.params.forEach((params: Params) => {
			this.id = +params['id']; // (+) converts string 'id' to a number
			this.blogService.getPostById(this.id).then(selectedBlogPost => this.selectedBlogPost = selectedBlogPost);
		});
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