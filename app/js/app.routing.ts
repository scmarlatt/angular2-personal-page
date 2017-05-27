import { Routes, RouterModule } from '@angular/router';
// import { ScootsPageComponent }	from './components/scoots-page.component';
import { BlogComponent }	from './components/blog.component';
import { BlogDetailsComponent }	from './components/blog-details.component';
import { AboutComponent }	from './components/about.component';
import { ListComponent }	from './components/list.component';
import { ListDetailsComponent }	from './components/list-details.component';
import { LandingComponent }	from './components/landing.component';

const appRoutes: Routes = [
	{
		component: LandingComponent, // replace this later with landing block
		path: 'scoot',
	},
	{
		component: ListComponent,
		path: 'list',
	},
	{
		component: AboutComponent,
		path: 'about',
	},
	{
		component: BlogComponent,
		path: 'blog',
	},
	{
		component: BlogDetailsComponent,
		path: 'blog/:id',
	},
	{
		component: ListDetailsComponent,
		path: 'list/:id',
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'scoot',
	},
];

export const routing = RouterModule.forRoot(appRoutes);
