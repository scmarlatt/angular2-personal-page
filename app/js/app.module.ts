import './rxjs-operators';

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ComponentOutlet, provideComponentOutletModule } from 'angular2-component-outlet';
import { AppComponent }  from './components/app.component';
import { AboutComponent } from './components/about.component';
import { ListComponent } from './components/list.component';
import { ListService } from './services/list.service';
import { ListDetailsComponent } from './components/list-details.component';
import { LandingComponent } from './components/landing.component';
import { ClimateComponent } from './components/climate.component';
import { BlogDetailsComponent } from './components/blog-details.component';
import { ScootsPageComponent } from './components/scoots-page.component';
import { BlogComponent } from './components/blog.component';
import { BlogService } from './services/blog.service';

import { routing }       from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, JsonpModule ],
  declarations: [ AboutComponent, 
  				  ScootsPageComponent, 
  				  BlogComponent, 
  				  ListComponent, 
  				  ListDetailsComponent, 
  				  BlogDetailsComponent,
            LandingComponent,
            ClimateComponent,
            ComponentOutlet
  				 ],
  providers:	[ ListService, BlogService, provideComponentOutletModule({}) ], 
  bootstrap:    [ ScootsPageComponent ]
})
export class AppModule { }
