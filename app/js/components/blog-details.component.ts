import { Component/*, OnInit*/ } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomPost } from './models/custom-post';
import { BlogService } from '../services/blog.service';
// import { ComponentOutlet, provideComponentOutletModule } from 'angular2-component-outlet';
import { htmlTemplate }	from '../templates/blog-details.html';

@Component({
	selector: 'blog-details',
	styleUrls: ['dist/css/component/blog-details.component.css'],
	template: htmlTemplate,
})

export class BlogDetailsComponent {
	aboutMe: string;
	viewingBlogPost: boolean = false;
	selectedBlogPost: CustomPost;
	id: number;
	context = this;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private blogService: BlogService) {}

	ngOnInit(): void {
		this.selectedBlogPost = {
			date: "",
			html: "",
			id: -1,
			img: "",
			title: "",
		};
		this.route.params.forEach((params: Params) => {
			this.id = +params['id']; // (+) converts string 'id' to a number
			this.blogService.getPostById(this.id).then((selectedBlogPost) => {
				this.selectedBlogPost = selectedBlogPost;
			});
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
