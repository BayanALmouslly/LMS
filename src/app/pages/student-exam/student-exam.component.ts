import { Component, OnInit } from '@angular/core';
import { Exam } from '../../model/exam/exam.model';
import { ExamService } from '../../service/exam.service';

@Component({
  selector: 'ngx-student-exam',
  templateUrl: './student-exam.component.html',
  styleUrls: ['./student-exam.component.scss']
})
export class StudentExamComponent implements OnInit {

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.GetCurrentExamForStudent()
    this.enabledQuetions()
  }
  date: Date = new Date()
  exam: Exam = new Exam()
  findExamToDay: boolean = false
  enabled: boolean = false
  GetCurrentExamForStudent() {
    this.date = new Date()
    this.examService.GetCurrentExamForStudent(this.date).subscribe(res => {
      console.log(res)
      if (!res)
        this.findExamToDay = false
      else {
        this.exam = res as any
        this.findExamToDay = true
      }
    })
  }
  enabledQuetions() {
    this.date = new Date()
    console.log(this.date)
    if (this.date <= this.exam.Date)
      this.enabled = true
  }
}
