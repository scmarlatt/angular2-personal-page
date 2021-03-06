export const htmlTemplate = `
<div class="container">
	<page-header></page-header>
	<br>
	<div class="row">
		<div class="container list-detail-wrapper">
			<div class="col-lg-6 col-md-6 col-sm-6 list-detail-left">
				<header class="row list-detail-header">
					<h2>{{selectedListItem.title}} :: {{selectedListItem.date}}</h2>
				</header>
				<div class="row list-detail-body">
					{{selectedListItem.body}}
				</div>
				<div class="row list-detail-price">
					<h2>price: {{selectedListItem.price}}</h2>
				</div>
				<div class="row list-detail-url">
					<h2>wtc: <a href="{{selectedListItem.url}}">{{selectedListItem.url}}</a></h2>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-6 list-detail-right">
				<img class="list-image" src="{{selectedListItem.img}}">
			</div>
		</div>
	</div>
</div>
`;
