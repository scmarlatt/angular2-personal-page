import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './components/app.component';
import { AboutComponent } from './components/about.component';
import { ListComponent } from './components/list.component';
import { ListService } from './services/list.service';
import { ListDetailsComponent } from './components/list-details.component';
import { LandingComponent } from './components/landing.component';
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
            LandingComponent
  				 ],
  providers:	[ ListService, BlogService ], 
  bootstrap:    [ ScootsPageComponent ]
})
export class AppModule { }
