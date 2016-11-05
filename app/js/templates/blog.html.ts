export const htmlTemplate = `
<div class="container">
	<div class="row global-nav">
		<nav class="scoot-nav pull-right">
			<ul>
				<li><a href="blog">blog</a></li>
				<li><a href="about">about</a></li>
				<li><a href="list">list</a></li>
			</ul>
		</nav>
	</div>
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