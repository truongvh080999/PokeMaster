import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../api-helper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReusableService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public defaultHeaders = new HttpHeaders();
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
  deleteMethod(apiUrl: string, id: any): Observable<any> {
    const params = `/${id}`;
    return this.http
      .delete(apiUrl + params)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  onGetById(apiUrl: string, id: any) {
    const params = `/${id}`;
    return this.http
      .get(apiUrl + params)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  login(
    apiUrl: string,
    model: { username: string; password: string }
  ): Observable<any> {
    const url = environment.serverUrl + apiUrl;
    let formParams: { append(param: string, value: any): any };
    formParams = new FormData();
    formParams.append('grant_type', 'password') as any;
    formParams.append('username', model.username) as any;
    formParams.append('password', model.password) as any;
    return this.http
      .post(url, formParams)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  postMethod(apiUrl: string, model: any): Observable<any> {
    const url = environment.serverUrl + apiUrl;
    const payLoad: any = {
      ...model,
    };
    return this.http
      .post(url, JSON.stringify(payLoad))
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  putMethod(
    apiUrl: string,
    model?: any,
    paramId: boolean = true
  ): Observable<any> {
    let params = '';
    if (model.id && paramId) {
      params = `/${model.id}`;
    }
    const payLoad: any = Array.isArray(model) ? model : { ...model };
    return this.http
      .put(apiUrl + params, JSON.stringify(payLoad))
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
}
