export const htmlTemplate = `
<div class="container">
	<div class="row">
		<div class=".col-lg-4 pull-right">
			<span class="scoot-title"><a href="">scoot_v.0.6</a></span> <!-- release . Major Front End change . Major Code change . Minor Chage -->
		</div>
	</div>
	<div class="row">
		<div class=".col-lg-12 center-block scoot-header-break"></div>
	</div>
	<div class="row">
		<div class="container routing-wrapper">
			<router-outlet></router-outlet>
		</div>
	</div>
</div>
`;