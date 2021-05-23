import { Component, OnInit } from '@angular/core';
import { Exam } from '../../../model/exam/exam.model';
import { ExamService } from '../../../service/exam.service';

@Component({
  selector: 'ngx-show-exams',
  templateUrl: './show-exams.component.html',
  styleUrls: ['./show-exams.component.scss']
})
export class ShowExamsComponent implements OnInit {

  constructor(private examservvice:ExamService) { }
exams:Exam[]=[]
  ngOnInit(): void {
    this.Get()
  }
Get(){
  this.examservvice.Get().subscribe(res=>{
    this.exams=res
  })
}
}
