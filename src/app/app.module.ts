import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentesComponent } from './views/ventes/ventes.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VentesCreatorComponent } from './views/ventes-creator/ventes-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SaleEditComponent } from './views/sale-edit/sale-edit.component';
import { SaleOneComponent } from './views/sale-one/sale-one.component';



@NgModule({
  declarations: [
    AppComponent,
    VentesComponent,
    VentesCreatorComponent,
    SaleEditComponent,
    SaleOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
