import { Routes, RouterModule } from '@angular/router';
import { ScootsPageComponent }	from './components/scoots-page.component';
import { BlogComponent }	from './components/blog.component';
import { BlogDetailsComponent }	from './components/blog-details.component';
import { AboutComponent }	from './components/about.component';
import { ListComponent }	from './components/list.component';
import { ListDetailsComponent }	from './components/list-details.component';
import { LandingComponent }	from './components/landing.component';
import { ClimateComponent }	from './components/climate.component';

const appRoutes: Routes = [
	{
		path: 'scoot',
		component: LandingComponent //replace this later with landing block
	},
	{
		path: 'climate',
		component: ClimateComponent
	},
	{
		path: 'list',
		component: ListComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'blog',
		component: BlogComponent
	},
	{
		path: 'blog/:id',
		component: BlogDetailsComponent
	},
	{
		path: 'list/:id',
		component: ListDetailsComponent
	},
	{
		path: '',
		redirectTo: 'scoot',
		pathMatch: 'full'
	}
];

export const routing = RouterModule.forRoot(appRoutes);
