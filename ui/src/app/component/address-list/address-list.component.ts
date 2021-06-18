import { Component, OnInit } from '@angular/core';
import { Address } from './../../model/address';
import { AddressService } from './../../service/address-service.service';
import { DataService } from './../../service/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses: Address[];
  total: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private addressService: AddressService,
    private dataService: DataService) {
    this.addresses = [];
    this.total = "0";
  }

  ngOnInit() {
    this.addressService.findAll().subscribe(data => {
      this.addresses = data;
    });
    this.addressService.count().subscribe(data => {
      this.total = data;
    });
  }

  edit(address) {
    this.dataService.setAddress(address);
  }

  delete(address) {
    this.addressService.delete(address).subscribe(data => {
      this.addresses = data;
      this.addressService.count().subscribe(data => {
        this.total = data;
      });
    });
  }
}