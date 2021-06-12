import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  GetCurrentExamForStudent(datetime):Observable<any>{
    let params = new HttpParams();
    if (datetime.Year != undefined || datetime.Year != null)
      params = params.append("Year", datetime.Year);
      if (datetime.Month != undefined || datetime.Month != null)
      params = params.append("Month", datetime.Month);
      if (datetime.Day != undefined || datetime.Day != null)
      params = params.append("Day", datetime.Day);
      if (datetime.Hour != undefined || datetime.Hour != null)
      params = params.append("Hour", datetime.Hour);
      if (datetime.Minit != undefined || datetime.Minit != null)
      params = params.append("Minit", datetime.Minit);
      params = params.append("UserId", datetime.UserId);
    return this.http.get(this.api+"GetCurrentExamForStudent", { params: params });
  }
  Answer(anser){
    return this.http.post(this.api+"Answer",anser);
  }
  GetAnswers(idExam){
    return this.http.get(this.api+"GetAnswers/"+idExam);
  }
}
