import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';
import { CustomPost }	from './models/custom-post';
import { BlogService } from '../services/blog.service';

import { htmlTemplate }	from '../templates/blog.html';


@Component({
	selector: 'blog-landing',
	styleUrls: ['dist/css/component/blog.component.css'],
	template: htmlTemplate,
})

export class BlogComponent {
	errorMessage: string;
	blogPostList: CustomPost[] = [];

	constructor(
		private router: Router,
		private blogService: BlogService) {
	}

	ngOnInit(): void{
		this.getBlogPostList();
		//this.getBlogFromServer();
	}

	onSelect(CustomPost): void{
		this.router.navigate(['/blog', CustomPost.id]);
	};
	
	getBlogPostList(): void{
		this.blogService.getBlogPosts().then(blogPostList => this.blogPostList = blogPostList);
	}

	getBlogFromServer(): void{
		this.blogService.getBlogFromServer().subscribe(
                       blogPost  => this.blogPostList.push(blogPost),
                       error =>  this.errorMessage = <any>error);
	}
	
	/*
	getPostDetails(selectedItem: blogPostId): void {
		this.blogService.getPostData(id).then(blogData =? this.data = postData);
	}
	*/	
}