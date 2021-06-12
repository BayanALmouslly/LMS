import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Answer, Exam } from '../../model/exam/exam.model';
import { Homework } from '../../model/homework.model';
import { ExamService } from '../../service/exam.service';
import { HomeworkService } from '../../service/homework.service';

@Component({
  selector: 'ngx-admin-homework',
  templateUrl: './admin-homework.component.html',
  styleUrls: ['./admin-homework.component.scss']
})
export class AdminHomeworkComponent implements OnInit {

  constructor(private homeworkservvice: HomeworkService,
    private toastrService: NbToastrService) { }
  questions: any[] = []
  Homeworks:Homework[]=[]
  ngOnInit(): void {
    this.Get();
  }
 
  Questions(question) {
    this.questions = []
    this.questions = question
  }
  Get() {
    this.homeworkservvice.Get().subscribe(res => {
      console.log(res);
      this.Homeworks = res as Homework[]
    })
  }
}
