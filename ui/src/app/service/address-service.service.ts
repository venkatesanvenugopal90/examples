import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from '../model/address';
import { Observable } from 'rxjs';

@Injectable()
export class AddressService {

  private addressUrl: string;

  private address: Address;

  constructor(private http: HttpClient) {
    this.addressUrl = 'http://localhost:8081/backend/rest/address';
    this.address = new Address();
  }

  public getAddress(): Address {
    return this.address;
  }

  public setAddress(address: Address) {
    this.address = address;
  }

  public findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.addressUrl.concat('/list'));
  }

  public count(): Observable<string> {
    return this.http.get<string>(this.addressUrl.concat('/count'));
  }

  public save(address: Address): Observable<Address[]> {
    return this.http.post<Address[]>(this.addressUrl, address);
  }

  public delete(address: Address): Observable<Address[]> {
    return this.http.delete<Address[]>(this.addressUrl.concat("/").concat(address.id));
  }
}