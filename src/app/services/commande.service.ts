import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  

  constructor(private httpclient:HttpClient) { 
    
  }
 

  commandeeadd(value):Observable<any>{
    return this.httpclient.post(`http://localhost:8083/api/test/addCommande`,value);
  }
  getAllCommandes():Observable<any>{
    return this.httpclient.get(`http://localhost:8083/api/test/commandes`);
  }
  deletecommande(id:number):Observable<any>{
    return this.httpclient.delete(`http://localhost:8083/api/test/commandes/${id}`);
  }
  editcommande(id:number):Observable<any>{
    return this.httpclient.get(`http://localhost:8083/api/test/commandes/${id}`);
  }

}
