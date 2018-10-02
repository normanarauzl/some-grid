import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { GroupComponent } from './group/group.component';

import { AgGridModule } from 'ag-grid-angular/main';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([GroupComponent])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
