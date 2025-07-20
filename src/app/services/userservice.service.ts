import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

 //private apiUrl = 'https://jsonplaceholder.typicode.com/users';
 private apiUrl='http://localhost:5000/users' ;

  constructor(private http: HttpClient) { }

  /* get :){
    return this.get('https://jsonplaceholder.typicode.com/users');} */

   getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //postMethod

  /*   postUsers(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  } */

    creer(user:any):Observable<any>
    {
      return this.http.post(this.apiUrl,user);
    }

}
