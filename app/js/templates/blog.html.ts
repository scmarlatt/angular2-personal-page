export const htmlTemplate = `
<div class="container-fluid">
	<page-header></page-header>
	<ul id="blog-list-wrapper">
		<li *ngFor="let post of blogPostList" (click)="onSelect(post)">
			<div class="blog-list-item">
				<img src="{{post.img}}" class="list-image">
				<span class="list-overlay"></span>
				<span class="list-title">{{post.title}}<br>{{post.date}}</span>
			</div>
		</li>
	</ul>
</div>
`;