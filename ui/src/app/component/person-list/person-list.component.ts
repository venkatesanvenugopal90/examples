import { Component, OnInit } from '@angular/core';
import { Person } from './../../model/person';
import { PersonService } from './../../service/person-service.service';
import { DataService } from './../../service/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];
  total: string;
  loading: string;
  messages: any[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private personService: PersonService,
    private dataService: DataService) {
    this.messages = [];
    this.total = "Loading...";
    this.loading = "Loading...";
  }

  ngOnInit() {
    this.getPersons();
    this.getTotal();
  }

  getTotal() {
    this.personService.count().subscribe(
      (data) => {
        this.total = data;
      },
      (error) => {
        this.messages.push(error);
        this.total = "Unable to get data";
      });
  }

  getPersons() {
    this.personService.findAll().subscribe(
      (data) => {
        this.persons = data;
      },
      (error) => {
        this.messages.push(error);
        this.loading = "Unable to get data";
      });
  }

  edit(person) {
    this.dataService.setPerson(person);
  }

  delete(person) {
    this.personService.delete(person).subscribe(
      (data) => {
        this.getTotal();
        this.persons = data;
      },
      (error) => {
        this.messages.push(error);
      });
  }
}