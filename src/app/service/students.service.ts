import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  api
  constructor(private http: HttpClient) { }
  Get() {
    return this.http.get(this.api);
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
