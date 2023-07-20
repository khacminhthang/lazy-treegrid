import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [AppComponent, AdminComponent], 
  imports: [
    CommonModule, 
    TreeGridAllModule, 
    BrowserModule,
    AppRoutingModule
  ], 
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
