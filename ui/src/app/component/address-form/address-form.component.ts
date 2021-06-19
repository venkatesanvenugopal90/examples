import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from './../../service/address-service.service';
import { DataService } from './../../service/data-service.service';
import { Address } from './../../model/address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  address: Address;
  title: string;
  messages: any[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private addressService: AddressService,
    private dataService: DataService) {
    this.messages = [];
    this.address = this.dataService.getAddress();
    this.title = this.address.id ? "Edit Address" : "New Address";
  }

  onSubmit() {
    this.addressService.save(this.address).subscribe(
    (data) => {
      this.gotoAddressList();
    },
    (error) => {
      this.messages.push(error);
    });
  }

  gotoAddressList() {
    this.router.navigate(['/addresses']);
  }

  ngOnDestroy() {
    this.dataService.resetData();
  }
}