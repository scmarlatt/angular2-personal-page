import { BlogPost } from './blog-post';

export const BLOGPOSTS: BlogPost[] = [
	{
		id: 0, 
	    title: 'winding down', 
	    date: 'Oct. 29, 2016 :: 9:09PM',
    	img:'https://s3-us-west-1.amazonaws.com/scm-personal-page/personal-page/images/blog/castro-sunset.jpg', 
    	html: `<h2>Winding Down</h2><br><h3>{{selectedBlogPost.date}}</h3><br><p><b>what a summer it was</b></p><p>there\'s something about summer that really makes it stand out. you can\'t quite put your finger on it but it\'s there. since moving out here i\'ve been blessed with great weather year round...</p>`
	}
];