import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  api=environment.baseUrl+"api/homework/"
  constructor(private http: HttpClient) { }
  Get() {
    return this.http.get<any>(this.api);
  }
  Add(advertising){
    return this.http.post(this.api,advertising);
  }
 
}
