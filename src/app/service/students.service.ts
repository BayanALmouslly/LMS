import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  api=environment.baseUrl+"api/User/"
  constructor(private http: HttpClient) { }
  Get() {
    return this.http.get<any>(this.api);
  }
  Add(student){
    return this.http.post(this.api,student);
  }
  update(student){
    return this.http.put(this.api,student);
  }
  Delete(id){
    return this.http.delete(this.api+id);
  }
}
