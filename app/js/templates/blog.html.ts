export const htmlTemplate = `
<div class="blog-wrapper">
	<page-header></page-header>
	<ul id="blog-inner">
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