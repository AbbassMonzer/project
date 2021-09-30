import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
    static serverApiUrl: string = 'https://localhost:44375/api/'
    // static serverApiAppUrl: string = environment.webApi;
    constructor(private http: HttpClient) {
    }

    putDataToServer(action: string, dataParams: any) {
        return this.http.put(HttpService.serverApiUrl + action, dataParams).pipe(map((response: any) => response))
    }
    deteteDataFromServer(action: string, dataParams: any) {
        return this.http.delete(HttpService.serverApiUrl + action, dataParams)

    }
    postFormDataToServer(action: string, formData) {
        return this.http.post(HttpService.serverApiUrl + action, JSON.stringify(formData)).pipe(map((response: any) => response.json()))
    }

   

    getDataFromServer(action: string) {
        return this.http.get(HttpService.serverApiUrl + action).pipe(map((response: any) => response))
    }


    postDataToServer(action: string,formData) {
        return this.http.post(HttpService.serverApiUrl + action, JSON.stringify(formData)).pipe(map((response: any) => response))

    }


}