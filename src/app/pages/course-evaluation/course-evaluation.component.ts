import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-course-evaluation',
  templateUrl: './course-evaluation.component.html',
  styleUrls: ['./course-evaluation.component.scss']
})
export class CourseEvaluationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
finalTest(){
  this.router.navigate(['/pages/CourseEvaluation/finaltest']);
}
selfTest(){
  this.router.navigate(['/pages/CourseEvaluation/selftest']);
}
homework(){
  this.router.navigate(['/pages/CourseEvaluation/homework']);

}
Survey(){
  this.router.navigate(['/pages/CourseEvaluation/Survey']);

}
}
