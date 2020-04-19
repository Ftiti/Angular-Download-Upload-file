import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }
  
  public getList(){
    return this.httpClient.get('http://localhost:8080/api/items');

  }

  downloadFile(id : any){
    return this.httpClient.get('http://localhost:8080/api/items/'+id,{
        responseType : 'blob',
        headers:new HttpHeaders().append('Content-Type','application/json')
    });
}


  
}
