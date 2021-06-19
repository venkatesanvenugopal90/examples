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
  loading: string;
  messages: any[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private addressService: AddressService,
    private dataService: DataService) {
    this.messages = [];
    this.total = "Loading...";
    this.loading = "Loading...";
  }

  ngOnInit() {
    this.getAddresses();
    this.getTotal();
  }

  getTotal() {
    this.addressService.count().subscribe(
      (data) => {
        this.total = data;
      },
      (error) => {
        this.messages.push(error);
        this.total = "Unable to get data";
      });
  }

  getAddresses() {
    this.addressService.findAll().subscribe(
      (data) => {
        this.addresses = data;
      },
      (error) => {
        this.messages.push(error);
        this.loading = "Unable to get data";
      });
  }

  edit(address) {
    this.dataService.setAddress(address);
  }

  delete(address) {
    this.addressService.delete(address).subscribe(
      (data) => {
        this.getTotal();
        this.addresses = data;
      },
      (error) => {
        this.messages.push(error);
      });
  }
}