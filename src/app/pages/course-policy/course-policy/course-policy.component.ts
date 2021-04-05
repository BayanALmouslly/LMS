import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-course-policy',
  templateUrl: './course-policy.component.html',
  styleUrls: ['./course-policy.component.scss']
})
export class CoursePolicyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  nextStep(){
    this.router.navigate(['/pages/educationalunit']);

  }
}
