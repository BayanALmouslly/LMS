import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-videos-unit',
  templateUrl: './videos-unit.component.html',
  styleUrls: ['./videos-unit.component.scss']
})
export class VideosUnitComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

nextStep(){
  this.router.navigate(['/pages/educationalunit/activitiesunit']);

}
}
