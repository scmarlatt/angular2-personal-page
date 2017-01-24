export const htmlTemplate = `
<div class="container">
	<page-header></page-header>
	<div class="row">
		<ul id="blog-list-wrapper">
			<li *ngFor="let post of blogPostList" (click)="onSelect(post)">
				<div class="blog-list-item">
					<img src="{{post.img}}" class="list-image">
					<span class="list-overlay"></span>
					<span class="list-title">{{post.title}}</span>
				</div>
			</li>
		</ul>
	</div>
</div>
`;