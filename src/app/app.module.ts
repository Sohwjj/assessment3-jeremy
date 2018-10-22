import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { DiaryComponent } from './diary/diary.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StallService } from './stall.service';

@NgModule({
  declarations: [
    AppComponent,
    AddMenuComponent,
    SearchMenuComponent,
    DiaryComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [StallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
