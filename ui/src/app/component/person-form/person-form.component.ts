import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../../service/person-service.service';
import { AddressService } from './../../service/address-service.service';
import { DataService } from './../../service/data-service.service';
import { Person } from './../../model/person';
import { Address } from './../../model/address';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  person: Person;
  title: string;
  addresses: Address[];
  messages: any[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private personService: PersonService,
    private addressService: AddressService,
    private dataService: DataService) {
    this.messages = [];
    this.addressService.findAll().subscribe(data => {
      this.addresses = data;
    });
    this.person = this.dataService.getPerson();
    this.title = this.person.id ? "Edit Person" : "New Person";
  }

  onSubmit() {
    this.personService.save(this.person).subscribe(
      (data) => {
        this.gotoPersonList();
      },
      (error) => {
        this.messages.push(error);
      });
  }

  gotoPersonList() {
    this.router.navigate(['/persons']);
  }

  ngOnDestroy() {
    this.dataService.resetData();
  }

  compareAddressId(address1, address2) {
    return address1 && address2 && address1.id == address2.id;
  }
}