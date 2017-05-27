export const htmlTemplate = `
<div class="container">
	<page-header></page-header>
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
