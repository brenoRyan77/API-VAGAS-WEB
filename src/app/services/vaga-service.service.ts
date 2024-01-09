import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVaga } from '../interfaces/ivaga';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagaServiceService {

  baseUrl = `${environment.api}/vagas`;

  constructor(private http: HttpClient) { }

  cadastrarVaga(vaga: IVaga): Observable<any>{
    return this.http.post<IVaga>(this.baseUrl, vaga);
  }

  listarTodasVagas(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  buscarPorId(id: Number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  atualzarVaga(id: Number, vaga: IVaga): Observable<any>{
    return this.http.put<IVaga>(`${this.baseUrl}/${id}`, vaga);
  }

  encerrarVaga(id: Number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
