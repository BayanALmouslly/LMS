import { Component, OnInit } from '@angular/core';
import { Advertising } from '../../model/advertising.model';
import { AdvertisingService } from '../../service/advertising.service';

@Component({
  selector: 'ngx-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit {

  constructor(private advertisingService: AdvertisingService) { }
  advertisings: Advertising[]=[]

  ngOnInit(): void {
    this.get()
  }
  get(){
    this.advertisingService.Get().subscribe(res=>{
      this.advertisings=res
//
    })
  }
}
