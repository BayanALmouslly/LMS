import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Advertising } from '../../model/advertising.model';
import { AdvertisingService } from '../../service/advertising.service';

@Component({
  selector: 'ngx-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  constructor(private advertisingService: AdvertisingService,
    private toastrService: NbToastrService) { }
  advertising: Advertising
  advertisings: Advertising[] = []
  ngOnInit(): void {
    this.advertising = new Advertising()
    this.get()
  }
  addAdvertising(position) {
    this.advertisingService.Add(this.advertising).subscribe(res => {
      this.toastrService.show(
        status || 'تمت الإضافة بنجاح',
        `اضافة`,
        { position, status });
      this.advertising.name = this.advertising.Name
      this.advertising.description = this.advertising.Desc
      this.advertising.link = this.advertising.Link
      this.advertisings.push(this.advertising)
      this.advertising = new Advertising()
    })
  }
  delete(item,position) {
    this.advertisingService.Delete(item.id).subscribe(res => {
      this.advertisings = this.advertisings.filter(a => a != item)
      this.toastrService.show(
        status || 'تم الحذف بنجاح',
        `حذف`,
        { position, status });

    })
  }
  get() {
    this.advertisingService.Get().subscribe(res => {
      this.advertisings = res

    })
  }
}
