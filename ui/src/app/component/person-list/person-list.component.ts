import { Component, OnInit } from '@angular/core';
import { Person } from './../../model/person';
import { PersonService } from './../../service/person-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];
  total: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private personService: PersonService) {
    this.persons = [];
    this.total = "0";
  }

  ngOnInit() {
    this.personService.findAll().subscribe(data => {
      this.persons = data;
    });
    this.personService.count().subscribe(data => {
      this.total = data;
    });
  }

  edit(person) {
    this.personService.setPerson(person);
  }

  delete(person) {
    this.personService.delete(person).subscribe(data => {
      this.persons = data;
      this.personService.count().subscribe(data => {
        this.total = data;
      });
    });
  }
}