import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReusableService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}
  getMethod(apiUrl: string, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    const url = environment.serverUrl + apiUrl;
    if (params) {
      Object.keys(params).forEach((key) => {
        if (
          (params[key] && params[key].toString().trim() !== '') ||
          (params[key] === 0 && params[key].toString().trim() !== '')
        ) {
          httpParams = httpParams.append(key, params[key]);
        }
      });
    }
    return this.http.get(url, {
      params: httpParams,
    });
  }
}
