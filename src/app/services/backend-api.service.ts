import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private url = environment.backend_url + '/api';

  constructor(private http: HttpClient) { }

  public GetHolaMundo(): Observable<any>  {
    const url = `${this.url}/holamundo`;
    return this.http.get<any>(url, {
      params: {
        idholamundo: 'hola'
      }
    })
  }
}
