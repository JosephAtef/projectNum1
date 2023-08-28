import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { TemplateComponent } from './template/template.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import { Template5Component } from './template5/template5.component';
import { Template6Component } from './template6/template6.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    OurserviceComponent,
    TemplateComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    Template6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
