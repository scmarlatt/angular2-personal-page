import { Routes, RouterModule } from '@angular/router';
import { ScootsPageComponent }	from './components/scoots-page.component';
import { BlogComponent }	from './components/blog.component';
import { BlogDetailsComponent }	from './components/blog-details.component';
import { AboutComponent }	from './components/about.component';
import { ListComponent }	from './components/list.component';
import { ListDetailsComponent }	from './components/list-details.component';

const appRoutes: Routes = [
	{
		path: 'scoot_v1/',
		component: ListComponent //replace this later with landing block
	},
	{
		path: 'scoot_v1/list',
		component: ListComponent
	},
	{
		path: 'scoot_v1/about',
		component: AboutComponent
	},
	{
		path: 'scoot_v1/blog',
		component: BlogComponent
	},
	{
		path: 'scoot_v1/blog/:id',
		component: BlogDetailsComponent
	},
	{
		path: 'scoot_v1/list/:id',
		component: ListDetailsComponent
	},
	{
		path: '',
		redirectTo: 'scoot_v1/',
		pathMatch: 'full'
	}
];

export const routing = RouterModule.forRoot(appRoutes);
