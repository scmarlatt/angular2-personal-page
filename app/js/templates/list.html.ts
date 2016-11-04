export const htmlTemplate = `
<div class="container">
	<div class="row">
		<nav class="scoot-nav pull-right">
			<ul>
				<li><a href="blog">blog</a></li>
				<li><a href="about">about</a></li>
				<li><a href="list">list</a></li>
			</ul>
		</nav>
	</div>
	<div class="row">
		<ul id="want-list-wrapper">
			<li *ngFor="let want of wantList" (click)="onSelect(want)">
				<div class="want-list-item">
					<img src="{{want.img}}" class="list-image">
					<span class="list-overlay"></span>
					<span class="list-title">{{want.title}}</span>
				</div>
			</li>
		</ul>
	</div>
</div>
`;