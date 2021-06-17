import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonListComponent } from './component/person-list/person-list.component';
import { PersonFormComponent } from './component/person-form/person-form.component';
import { AddressListComponent } from './component/address-list/address-list.component';
import { AddressFormComponent } from './component/address-form/address-form.component';
import { PersonService } from './service/person-service.service';
import { AddressService } from './service/address-service.service';

@NgModule({
  declarations: [
  AppComponent,
  PersonListComponent,
  PersonFormComponent,
  AddressListComponent,
  AddressFormComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [PersonService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }