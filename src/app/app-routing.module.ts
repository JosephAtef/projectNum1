import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import { Template5Component } from './template5/template5.component';
import { Template6Component } from './template6/template6.component';

const routes: Routes = [
  {
    path:'contact',component:ContactComponent
  },

  {
    path:'template',component:TemplateComponent
  },
  {
    path:'home',component:HomeComponent
  },

  {
    path:'ourservice',component:OurserviceComponent
  },
  {
    path:'template/template1',component:Template1Component
  }
  ,
  {
    path:'template/template2',component:Template2Component
  }
  ,
  {
    path:'template/template3',component:Template3Component
  }
  ,
  {
    path:'template/template4',component:Template4Component
  }
  ,
  {
    path:'template/template5',component:Template5Component
  }
  ,
  {
    path:'template/template6',component:Template6Component
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
