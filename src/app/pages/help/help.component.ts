import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public router:Router) { }
  date=new Date

  ngOnInit(): void {
  }
StudentServies(){
  this.router.navigate(['/pages/help/servicestudent'])
}
support(){
  this.router.navigate(['/pages/help/support'])
}
home(){
  this.router.navigate(['/pages/homepage/start'])

}
coursedesc(){
  this.router.navigate(['/pages/courses'])

}
coursePolicy(){
  this.router.navigate(['/pages/coursePolicy'])

}
advertising(){
  this.router.navigate(['/pages/advertising'])

}
educationalunit(){
  this.router.navigate(['/pages/educationalunit'])

}
homeworks(){
  this.router.navigate(['/pages/homeworks'])

}
discussions(){
  this.router.navigate(['/pages/discussions'])

}
CourseEvaluation(){
  this.router.navigate(['/pages/CourseEvaluation'])

}
exam(){
  this.router.navigate(['/pages/exam'])

}
help(){
  this.router.navigate(['/pages/help'])

}


}
