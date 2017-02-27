import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MasterComponent} from './components/master/master.component';
import {HomeComponent} from './components/pages/home.component';
import {ProjectComponent} from './components/pages/project.component';

import {ProfileComponent} from './githubprofile/profile.component';

import {Routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, Routing, HttpModule, FormsModule ],
  declarations: [ AppComponent,
                  NavbarComponent, 
                  MasterComponent,
                  HomeComponent, 
                  ProjectComponent,
                  ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
