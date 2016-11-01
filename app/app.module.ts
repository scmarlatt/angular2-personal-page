import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent } from './scoots-page/about/about.component';
import { ListComponent } from './scoots-page/list/list.component';
import { ListService } from './scoots-page/list/list.service';
import { ListDetailsComponent } from './scoots-page/list/list-details/list-details.component';
import { BlogDetailsComponent } from './scoots-page/blog/blog-details/blog-details.component';
import { ScootsPageComponent } from './scoots-page/scoots-page.component';
import { BlogComponent } from './scoots-page/blog/blog.component';
import { BlogService } from './scoots-page/blog/blog.service';

import { routing }       from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, JsonpModule ],
  declarations: [ AboutComponent, 
  				  ScootsPageComponent, 
  				  BlogComponent, 
  				  ListComponent, 
  				  ListDetailsComponent, 
  				  BlogDetailsComponent
  				 ],
  providers:	[ ListService, BlogService ], 
  bootstrap:    [ ScootsPageComponent ]
})
export class AppModule { }
