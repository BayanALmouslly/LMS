import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  api=environment.baseUrl+"api/HomeWork/"
  constructor(private http: HttpClient) { }
  Get() {
    return this.http.get<any>(this.api);
  }
  Add(file){
    let  formData:FormData=new FormData();
    formData.append("Note",file.Note);
    formData.append("File",file.File);
    formData.append("UserId",file.UserId);

    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');
   return this.http.post(this.api,formData);
    }
 
}
