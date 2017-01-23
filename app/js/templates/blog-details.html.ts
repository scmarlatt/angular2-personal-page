export const htmlTemplate = `
<div class="container">
	<div class="row global-nav">
		<nav class="scoot-nav">
			<a href="blog" class="back"><< back</a>
			<ul class="pull-right">
				<li><a href="about">about</a></li>
				<li><a href="blog">blog</a></li>
				<li><a href="resume">resume</a></li>
			</ul>
		</nav>
	</div>
	<br>
	<div class="row blog-details-wrapper">
  		<ng-container *componentOutlet="selectedBlogPost.html; context: context"></ng-container>
	</div>
</div>
`;