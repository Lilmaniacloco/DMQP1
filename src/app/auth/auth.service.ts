import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private _authStatus = new BehaviorSubject<boolean> (false);
  public authStatus = this._authStatus.asObservable();

  private isAuthenticated() : boolean {return localStorage.getItem("countryPass")!=null;}
  getToken() : string |null {return localStorage.getItem("countryPass");}
  private setAuthStatus (isAuthenticated : boolean) : void {this._authStatus.next(isAuthenticated);}

  login(loginRequest:LoginRequest): Observable <LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.baseUrl}api/Admin/LogIn`,
      loginRequest).pipe(tap(loginResult =>  {
        if(loginResult.success){
          localStorage.setItem("counrtyPass",loginResult.token);
          this.setAuthStatus(true);

        }
      }));
  
  }
  logout(){
    localStorage.removeItem("counrtyPass");
    this.setAuthStatus(false);


  }

}
