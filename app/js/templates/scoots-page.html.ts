export const htmlTemplate = `<div class="container">
	<div class="row">
		<div class=".col-lg-4 pull-right">
			<span class="scoot-title">scoot_v.0.0.2.1</span> <!-- release . Major Front End change . Major Code change . Minor Chage -->
		</div>
	</div>
	<div class="row">
		<div class=".col-lg-12 center-block scoot-header-break"></div>
	</div>
	<div class="row">
		<nav class="scoot-nav pull-right">
			<ul>
				<li><a href="scoot_v1/blog/">blog</a></li>
				<li><a href="scoot_v1/about/">about</a></li>
				<li><a href="scoot_v1/list/">list</a></li>
			</ul>
		</nav>
	</div>
	<div class="row">
		<div class="container">
			<router-outlet></router-outlet>
		</div>
	</div>
</div>
`;