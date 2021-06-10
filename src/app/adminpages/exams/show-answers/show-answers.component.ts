import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Answer } from '../../../model/exam/answer.model';
import { Exam } from '../../../model/exam/exam.model';
import { ExamService } from '../../../service/exam.service';

@Component({
  selector: 'ngx-show-answers',
  templateUrl: './show-answers.component.html',
  styleUrls: ['./show-answers.component.scss']
})
export class ShowAnswersComponent implements OnInit {
  constructor(private examservvice: ExamService,
    private toastrService: NbToastrService) { }
  exams: Exam[] = []
  questions: any[] = []
  examId
  Answers:Answer[]=[]
  ngOnInit(): void {
    this.GetExam()
  }
  GetExam() {
    this.examservvice.Get().subscribe(res => {
      this.exams = res
    })
  }
  Questions(question) {
    this.questions = []
    this.questions = question
  }
  GetAnswer() {
    this.examservvice.GetAnswers(this.examId).subscribe(res => {
      this.Answers = res as Answer[]
    })
  }
}
