import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from '../model/address';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Utils } from '../utils/utils';

@Injectable()
export class AddressService {

  private addressUrl: string;

  constructor(private http: HttpClient) {
    this.addressUrl = 'http://localhost:8081/backend/rest/address';
  }

  public findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.addressUrl.concat('/list')).pipe(catchError(error => Utils.handleHttpError(error)));
  }

  public count(): Observable<string> {
    return this.http.get<string>(this.addressUrl.concat('/count')).pipe(catchError(error => Utils.handleHttpError(error)));
  }

  public save(address: Address): Observable<Address[]> {
    return this.http.post<Address[]>(this.addressUrl, address).pipe(catchError(error => Utils.handleHttpError(error)));
  }

  public delete(address: Address): Observable<Address[]> {
    return this.http.delete<Address[]>(this.addressUrl.concat("/").concat(address.id)).pipe(catchError(error => Utils.handleHttpError(error)));
  }
}