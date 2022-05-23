import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpclient:HttpClient) { }
  contactadd(value):Observable<any>{
    return this.httpclient.post(`http://localhost:8083/api/test/addContact`,value);
  }
  
  getAllcontact():Observable<any>{
    return this.httpclient.get(`http://localhost:8083/api/test/contacts`);
  }
}
