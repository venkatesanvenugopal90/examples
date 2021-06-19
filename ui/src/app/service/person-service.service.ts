import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Utils } from '../utils/utils';

@Injectable()
export class PersonService {

  private personUrl: string;

  constructor(private http: HttpClient) {
    this.personUrl = 'http://localhost:8081/backend/rest/person';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl.concat('/list')).pipe(catchError(error => Utils.handleHttpError(error)));
  }

  public count(): Observable<string> {
    return this.http.get<string>(this.personUrl.concat('/count')).pipe(catchError(error => Utils.handleHttpError(error)));
  }

  public save(person: Person): Observable<Person[]> {
    return this.http.post<Person[]>(this.personUrl, person).pipe(catchError(error => Utils.handleHttpError(error)));
  }

  public delete(person: Person): Observable<Person[]> {
    return this.http.delete<Person[]>(this.personUrl.concat("/").concat(person.id)).pipe(catchError(error => Utils.handleHttpError(error)));
  }
}