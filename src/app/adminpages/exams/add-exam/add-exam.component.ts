import { Component, OnInit } from '@angular/core';
import { Exam, quetion } from '../../../model/exam/exam.model';

@Component({
  selector: 'ngx-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {

  constructor() { }
  exam: Exam = new Exam
  quetion:quetion=new quetion
  ngOnInit(): void {
  }
  addQuetion(){
    this.exam.quetion.push(this.quetion)
  }
}
