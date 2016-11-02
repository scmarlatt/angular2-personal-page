import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	styleUrls: ['dist/css/component/app.component.css'],
	template: `
   			  <router-outlet></router-outlet>
			  `
})

export class AppComponent {
	title = 'scoot_v.1';
}

/*
<nav>
			     <a routerLink="/dashboard">Dashboard</a>
			     <a routerLink="/scoots">Scoots</a>
			  </nav>
			  */