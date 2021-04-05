import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  icon = "map-outline"
  showSelfTest() {
this.router.navigate(['/pages/educationalunit/selftestunit'])
  }
  showhomeWork() {
    this.router.navigate(['/pages/educationalunit/homeworkunit'])

  }
  showVideos() {
    this.router.navigate(['/pages/educationalunit/videosunit'])

  }
  showActivties() {
    this.router.navigate(['/pages/educationalunit/activitiesunit'])

  }
}
