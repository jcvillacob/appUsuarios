import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://gorest.co.in/public/v2/users';
  token = 'a3e4a2b813e1e1f2f1584970cbeee39285c74577f5a3657312d3613fa5003e48';
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.url + '?access-token=' + this.token)
  }

  getUsuario(id:number): Observable<any>{
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token)
  }
}
