import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: 'spreadsheet/basic', component: SpreadsheetComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SpreadsheetComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
