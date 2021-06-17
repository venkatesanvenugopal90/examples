import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './component/person-list/person-list.component';
import { AddressListComponent } from './component/address-list/address-list.component';
import { PersonFormComponent } from './component/person-form/person-form.component';
import { AddressFormComponent } from './component/address-form/address-form.component';

const routes: Routes = [
{ path: '', redirectTo: 'persons', pathMatch : 'full'},
{ path: 'persons', component: PersonListComponent },
{ path: 'addresses', component: AddressListComponent },
{ path: 'addperson', component: PersonFormComponent },
{ path: 'addaddress', component: AddressFormComponent },
{ path: 'editperson', component: PersonFormComponent },
{ path: 'editaddress', component: AddressFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }