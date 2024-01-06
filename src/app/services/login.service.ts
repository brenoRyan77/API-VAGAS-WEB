import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../interfaces/ilogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = `${environment.api}/auth`;
  constructor(private http: HttpClient) { }

  login(dados: ILogin): Observable<any>{
    return this.http.post<ILogin>(`${this.baseUrl}/login`, dados);
  }
}
