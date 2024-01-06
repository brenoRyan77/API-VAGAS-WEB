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
}
