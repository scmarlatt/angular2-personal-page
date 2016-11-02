import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';
import { ListPost }	from './models/list-post';
import { ListService } from '../services/list.service';

import { htmlTemplate }	from '../templates/list.html';

@Component({
	selector: 'list-landing',
	styleUrls: ['dist/css/component/list.component.css'],
	template: htmlTemplate,
})

export class ListComponent {
	aboutMe: string;
	viewingListItem: boolean = false;
	wantList: ListPost[] = [];


	constructor(
		private router: Router,
		private listService: ListService) {
	}

	onSelect(ListPost): void{
		this.router.navigate(['scoot_v1/list/', ListPost.id]);
	};

	ngOnInit(): void {
		this.getList();
	}

	getList(): void {
		this.listService.getPosts().then(wantList => this.wantList = wantList);
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