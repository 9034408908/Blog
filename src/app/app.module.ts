import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http"
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TranslateComponent } from './translate/translate.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RwSelect2Component } from './rw-select2/rw-select2.component';
import { DrpdwnComponent } from './drpdwn/drpdwn.component';
import { FormmComponent } from './formm/formm.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

export const appRoutes: Routes = [
  {
    path: 'details',
    component: DetailsComponent
  },
  { 
    path: 'emp/:id',
    component: EmpComponent,

    children: [
    {
    path: 'details',
    component: DetailsComponent
  },
    ]

  },
  {
    path: 'about',
    component: AboutComponent,

    children: [
    {
     path: 'emp',
    component: EmpComponent
  },
    ]
  }
    
  ];

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    DetailsComponent,
    AboutComponent,
    HeaderComponent,
    SidebarComponent,
    TranslateComponent,
    RwSelect2Component,
    DrpdwnComponent,
    FormmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,                                            
            deps: [HttpClient]
          }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
