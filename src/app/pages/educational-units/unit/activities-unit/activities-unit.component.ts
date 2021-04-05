import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-activities-unit',
  templateUrl: './activities-unit.component.html',
  styleUrls: ['./activities-unit.component.scss']
})
export class ActivitiesUnitComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

nextStep(){
  this.router.navigate(['/pages/educationalunit/unit']);

}
homeworkUnit(){
  this.router.navigate(['/pages/educationalunit/homeworkunit']);

}
selfTest(){
  this.router.navigate(['/pages/educationalunit/selftestunit']);

}

}
