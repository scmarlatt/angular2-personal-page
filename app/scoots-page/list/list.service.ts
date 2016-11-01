import { Injectable } from '@angular/core';

import { ListPost } from '../mock-resources/list-post';
import { POSTS } from '../mock-resources/mock-list';

@Injectable()
export class ListService {
	getPosts(): Promise<ListPost[]> {
		return Promise.resolve(POSTS);
	}
	getPostById(id: number | string) {
    	return Promise.resolve(POSTS).then(wantList => wantList.find(selectedListItem => selectedListItem.id === +id));
	}
}
