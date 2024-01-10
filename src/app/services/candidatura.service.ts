import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {

  baseUrl = `${environment.api}/candidaturas`;
  constructor(private http: HttpClient) { }

  aplicarVaga(payload: any): Observable<any>{
    return this.http.post<any>(this.baseUrl, payload);
  }

  listar(user: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/minhas-candidaturas/${user}`)
  }

  desistir(username: any, idCandidatura: Number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/desistir/${username}/${idCandidatura}`)
  }
}
