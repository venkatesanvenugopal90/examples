import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from './../../service/address-service.service';
import { Address } from './../../model/address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  address: Address;
  title: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private addressService: AddressService) {
    this.address = this.addressService.getAddress();
    if (this.address.id == undefined) {
      this.title = "New Address" ;
      this.address = new Address();
    } else {
      this.title = "Edit Address";
    }
  }

  onSubmit() {
    this.addressService.save(this.address).subscribe(result => this.gotoAddressList());
  }

  gotoAddressList() {
    this.router.navigate(['/addresses']);
  }

  ngOnDestroy() {
    this.addressService.setAddress(new Address());
  }
}