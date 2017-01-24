export const htmlTemplate = `
<div class="container">
	<details-header></details-header>
	<br>
	<div class="row blog-details-wrapper">
  		<ng-container *componentOutlet="selectedBlogPost.html; context: context"></ng-container>
	</div>
</div>
`;