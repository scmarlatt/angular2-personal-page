import { Component, OnInit }	from '@angular/core';
import { Router, ActivatedRoute, Params }		from '@angular/router';
import { ListPost }	from './models/list-post';
import { ListService } from '../services/list.service';

import { htmlTemplate }	from '../templates/list-details.html';

@Component({
	selector: 'list-details',
	styleUrls: ['dist/css/component/list-details.component.css'],
	template: htmlTemplate,
})

export class ListDetailsComponent {
	aboutMe: string;
	viewingListItem: boolean = false;
	selectedListItem: ListPost;
	id: number;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private listService: ListService) {
	}

	ngOnInit(): void {
		this.selectedListItem = {
			id: -1,
			title: "",
			img: "",
			body: "",
			url: "",
			price: ""
		};
		this.route.params.forEach((params: Params) => {
			this.id = +params['id']; // (+) converts string 'id' to a number
			this.listService.getPostById(this.id).then(selectedListItem => this.selectedListItem = selectedListItem);
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