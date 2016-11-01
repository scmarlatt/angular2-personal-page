import { Component } from '@angular/core';

import './rxjs-operators';

@Component({
	selector: 'my-app',
	styleUrls: ['app/app.component.css'],
	templateUrl: `
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