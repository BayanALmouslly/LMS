import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  api
  constructor(private http: HttpClient) { }
  Get() {
    return this.http.get(this.api);
  }
  Add(advertising){
    return this.http.post(this.api,advertising);
  }
  update(advertising){
    return this.http.put(this.api,advertising);
  }
  Delete(id){
    return this.http.delete(this.api+id);
  }
}
