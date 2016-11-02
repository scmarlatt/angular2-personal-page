import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { BlogPost } from '../components/models/blog-post';
import { BLOGPOSTS } from '../components/models/blog-posts';

@Injectable()
export class BlogService {
	private blogPostInfoUrl = 'http://127.0.0.1:8081/content/blog/blog-posts.json';

	constructor (private http: Http) {}

	getBlogPosts(): Promise<BlogPost[]> {
		console.log("getting blog posts");
		return Promise.resolve(BLOGPOSTS);
	}

	getPostById(id: number | string) {
    	return Promise.resolve(BLOGPOSTS).then(blogPostList => blogPostList.find(selectedBlogPost => selectedBlogPost.id === +id));
	}

	getBlogFromServer(): Observable<BlogPost> {
		console.log("requesting server");
    	return this.http.get(this.blogPostInfoUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
	}

	private extractData(res: Response) {
		console.log(res);
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: Response | any) {
	  // In a real world app, we might use a remote logging infrastructure
	  let errMsg: string;
	  if (error instanceof Response) {
	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
	    errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}

}
