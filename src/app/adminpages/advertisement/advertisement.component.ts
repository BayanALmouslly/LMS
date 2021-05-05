import { Component, OnInit } from '@angular/core';
import { Advertising } from '../../model/advertising.model';
import { AdvertisingService } from '../../service/advertising.service';

@Component({
  selector: 'ngx-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {
  
  constructor(private advertisingService: AdvertisingService) { }
  advertising: Advertising
  advertisings: Advertising[]=[]
  ngOnInit(): void {
    this.advertising = new Advertising()
    this.get()
  }
  addAdvertising() {
    this.advertisingService.Add(this.advertising).subscribe(res => {
      this.advertisings.push(this.advertising)
      this.advertising = new Advertising()
    })
  }
  delete(item){
    this.advertisingService.Delete(item.id).subscribe(res => {
      this.advertisings=this.advertisings.filter(a=>a!=item)

    })
  }
  get(){
    this.advertisingService.Get().subscribe(res=>{
      this.advertisings=res
    })
  }
}
