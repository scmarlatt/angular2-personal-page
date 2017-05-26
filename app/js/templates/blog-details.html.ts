export const htmlTemplate = `
<div class="blog-details-wrapper">
	<details-header></details-header>
	<div class="blog-details-inner">
  		<ng-container *componentOutlet="selectedBlogPost.html; context: context"></ng-container>
	</div>
</div>
`;