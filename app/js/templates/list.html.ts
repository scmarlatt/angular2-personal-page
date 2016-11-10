export const htmlTemplate = `
<div class="container">
	<div class="row global-nav">
		<nav class="scoot-nav pull-right">
			<ul>
				<li><a href="climate">climate</a></li>
				<li><a href="about">about</a></li>
				<li><a href="blog">blog</a></li>
				<li><a href="list">stuff</a></li>
			</ul>
		</nav>
	</div>
	<div class="row">
		<ul id="want-list-wrapper">
			<li *ngFor="let want of wantList" (click)="onSelect(want)">
				<div class="want-list-item">
					<img src="{{want.img}}" class="list-image">
					<span class="list-overlay"></span>
					<span class="list-title">{{want.title}}<br>{{want.date}}</span>
				</div>
			</li>
		</ul>
	</div>
</div>
`;