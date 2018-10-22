import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { DiaryComponent } from './diary/diary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const appRoutes = [
    {
        path: 'Home',
        component: HomeComponent,
    },
    {
        path: 'addMenu',
        component: AddMenuComponent,
    },
    {
        path: 'searchMenu',
        component: SearchMenuComponent,
    },
    {
        path: 'foodDiary',
        component: DiaryComponent,
    },
    {
        path: '', 
        redirectTo: '/Home', 
        pathMatch: 'full' 
    },
    {
        path: '**', 
        component: PageNotFoundComponent,
    }    
];


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: []
  
})
export class AppRoutingModule { }
