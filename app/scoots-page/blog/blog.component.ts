import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';
import { BlogPost }	from './blog-post';
import { BlogService } from './blog.service';


@Component({
	selector: 'blog-landing',
	styleUrls: ['app/scoots-page/blog/blog.component.css'],
	templateUrl: 'app/scoots-page/blog/blog.component.html'
})

export class BlogComponent {
	errorMessage: string;
	blogPostList: BlogPost[] = [];

	constructor(
		private router: Router,
		private blogService: BlogService) {
	}

	ngOnInit(): void{
		this.getBlogPostList();
		//this.getBlogFromServer();
	}

	onSelect(BlogPost): void{
		this.router.navigate(['scoot_v1/blog/', BlogPost.id]);
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