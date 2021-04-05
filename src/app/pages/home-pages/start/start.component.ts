import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }
  nextStep(){
    this.router.navigate(['/pages/courses'])
  }
  CourseMessage(){
    this.router.navigate(['/pages/CourseMessage'])

  }
  discussions(){
    this.router.navigate(['/pages/discussions'])

  }
}
