import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginUser } from './loginInterface';
import { IUser } from './user-module';
import { contact } from './contactInterface';
@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private http: HttpClient) { }

  loginData(): Observable <loginUser>{
    const url= 'http://localhost:3000/login';
    return this.http.get<loginUser>(url);
  }

  submitLogin(loginForms: loginUser): Observable <loginUser>{
    const url= 'http://localhost:3000/login';
    const headers = {'content-type':'application/json'};
    return this.http.post<loginUser>(url,loginForms,{headers});
  }

  getId(id: loginUser): Observable<loginUser>{
    const URL= 'http://localhost:3000/login';
    const url= `${URL}/${id}`
    return this.http.get<loginUser>(url);
  }

  getProfile(id : IUser): Observable<IUser>{
    const URL= 'http://localhost:3000/profile';
    const url = `${URL}/${id}`;
    return this.http.get<IUser>(url);
  }

  createProfile(body: IUser):Observable<IUser>{
    const url= 'http://localhost:3000/profile';
    const headers = {'content-type':'application/json'};
    return this.http.post<IUser>(url,body,{headers});
  }

  updateContact(complain: contact): Observable<contact>{
    const url= 'http://localhost:3000/contact';
    const headers = {'content-type':'application/json'};
    return this.http.post<contact>(url,complain,{headers});
  }
}
