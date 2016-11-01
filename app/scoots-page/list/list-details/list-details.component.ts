import { Component, OnInit }	from '@angular/core';
import { Router, ActivatedRoute, Params }		from '@angular/router';
import { ListPost }	from '../../mock-resources/list-post';
import { ListService } from '../list.service';

@Component({
	selector: 'list-details',
	styleUrls: ['app/scoots-page/list/list-details/list-details.component.css'],
	templateUrl: 'app/scoots-page/list/list-details/list-details.component.html'
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