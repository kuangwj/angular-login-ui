import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './top-nav/home/home.component';
import { AboutComponent } from './top-nav/about/about.component';
import { BlogComponent } from './top-nav/blog/blog.component';
import { PagesComponent } from './top-nav/pages/pages.component';
import { ContactComponent } from './top-nav/contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavUserComponent } from './top-nav-user/top-nav-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    PagesComponent,
    ContactComponent,
    SignInComponent,
    RegisterComponent,
    TopNavUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
