import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {


  constructor(private httpclient:HttpClient) {
  }

  societeadd(value):Observable<any>{
    return this.httpclient.post(`http://localhost:8083/api/test/addSociete`,value);
  }
  
  getAllsociete():Observable<any>{
    return this.httpclient.get(`http://localhost:8083/api/test/societes`);
  }
  

  deletesociete(id:number):Observable<any>{
    return this.httpclient.delete(`http://localhost:8083/api/test/societes/${id}`);
  }




 


}
