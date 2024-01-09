import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      const roles: string[] = decodedToken.roles;
      return roles.includes('ROLE_ADMIN');
    }
    return false;
  }
  constructor() { }
}
