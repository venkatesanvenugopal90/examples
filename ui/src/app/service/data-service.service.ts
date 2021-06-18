import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { Address } from '../model/address';

@Injectable()
export class DataService {

  private person: Person;
  private address: Address;

  constructor() {
    this.person = new Person();
    this.address = new Address();
  }

  public getPerson(): Person {
    return this.person;
  }

  public setPerson(person: Person) {
    this.person = person;
  }

  public getAddress(): Address {
    return this.address;
  }

  public setAddress(address: Address) {
    this.address = address;
  }

  public resetData() {
    this.person = new Person();
    this.address = new Address();
  }
}