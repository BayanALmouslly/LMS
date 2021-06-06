import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  api=environment.baseUrl+"api/Exam/"
  constructor(private http: HttpClient) { }
  Get() {
    return this.http.get<any>(this.api);
  }
  Add(advertising){
    return this.http.post(this.api,advertising);
  }
  Delete(id){
    return this.http.delete(this.api+id);
  }
  GetCurrentExamForStudent(datetime){
    return this.http.get(this.api+"GetCurrentExamForStudent",datetime);

  }
}
