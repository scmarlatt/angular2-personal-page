import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';
import { ListPost }	from '../mock-resources/list-post';
import { ListService } from './list.service';

@Component({
	selector: 'list-landing',
	styleUrls: ['app/scoots-page/list/list.component.css'],
	templateUrl: 'app/scoots-page/list/list.component.html'
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