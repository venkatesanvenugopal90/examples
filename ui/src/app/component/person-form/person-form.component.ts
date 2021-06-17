import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../../service/person-service.service';
import { AddressService } from './../../service/address-service.service';
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

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private personService: PersonService,
    private addressService: AddressService) {
    this.addressService.findAll().subscribe(data => {
      this.addresses = data;
    });
    this.person = this.personService.getPerson();
    if (this.person.id == undefined) {
      this.title = "New Person" ;
      this.person = new Person();
    } else {
      this.title = "Edit Person";
    }
  }

  onSubmit() {
    this.personService.save(this.person).subscribe(result => this.gotoPersonList());
  }

  gotoPersonList() {
    this.router.navigate(['/persons']);
  }

  ngOnDestroy() {
    this.personService.setPerson(new Person());
  }

  compareAddressId(address1, address2) {
    return address1 && address2 && address1.id == address2.id;
  }
}