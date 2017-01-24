export const htmlTemplate = `
<div class="container">
	<page-header></page-header>
	<br>
	<div class="row blog-details-wrapper">
  		<ng-container *componentOutlet="selectedBlogPost.html; context: context"></ng-container>
	</div>
</div>
`;