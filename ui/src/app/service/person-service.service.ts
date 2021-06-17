import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService {

  private personUrl: string;

  private person: Person;

  constructor(private http: HttpClient) {
    this.personUrl = 'http://localhost:8081/backend/rest/person';
    this.person = new Person();
  }

  public getPerson(): Person {
    return this.person;
  }

  public setPerson(person: Person) {
    this.person = person;
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl.concat('/list'));
  }

  public count(): Observable<string> {
    return this.http.get<string>(this.personUrl.concat('/count'));
  }

  public save(person: Person): Observable<Person[]> {
    return this.http.post<Person[]>(this.personUrl, person);
  }

  public delete(person: Person): Observable<Person[]> {
    return this.http.delete<Person[]>(this.personUrl.concat("/").concat(person.id));
  }
}