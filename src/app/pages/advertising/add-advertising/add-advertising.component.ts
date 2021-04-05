import { Component, OnInit } from '@angular/core';
import { Advertising } from '../../../model/advertising.model';
import { AdvertisingService } from '../../../service/advertising.service';

@Component({
  selector: 'ngx-add-advertising',
  templateUrl: './add-advertising.component.html',
  styleUrls: ['./add-advertising.component.scss']
})
export class AddAdvertisingComponent implements OnInit {

  constructor(private advertisingService: AdvertisingService) { }
  advertising: Advertising
  ngOnInit(): void {
    this.advertising = new Advertising()
  }
  addAdvertising() {
    this.advertisingService.Add(this.advertising).subscribe(res => {

    })
  }
}
