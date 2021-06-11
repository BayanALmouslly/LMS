import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { QueueScheduler } from 'rxjs/internal/scheduler/QueueScheduler';
import { Answer, Exam, quetion } from '../../model/exam/exam.model';
import { ExamService } from '../../service/exam.service';

@Component({
  selector: 'ngx-student-exam',
  templateUrl: './student-exam.component.html',
  styleUrls: ['./student-exam.component.scss']
})
export class StudentExamComponent implements OnInit {

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.GetCurrentExamForStudent();
    this.Answers = []
    if (JSON.parse(localStorage.getItem('answers')))
      this.Answers = JSON.parse(localStorage.getItem('answers'))
  }
  date: Date = new Date()
  exam: Exam = new Exam
  findExamToDay: boolean = false
  noExamToDay: boolean = false
  endTimeExam: boolean = false
  enabled: boolean = false
  Answer: Answer = new Answer
  Answers: Answer[] = []
  timeExam = 0
  tempQ
  copyFromExam: Exam;
  currentQuestion: quetion;
  GetCurrentExamForStudent() {
    this.date = new Date()
    var today = new Date();
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    // var s = today.getSeconds();
    this.examService.GetCurrentExamForStudent({ Year: yyyy, Month: mm, Day: dd, Hour: h, Minit: m }).subscribe(res => {
      if (!res) {
        this.noExamToDay = true;
        this.findExamToDay = false
      } else {
        this.noExamToDay = false;
        this.findExamToDay = true
        this.exam = res.examStudentDto as Exam
        this.exam.question = res.questions;
        this.copyFromExam = { ...this.exam };
        this.timeExam = this.copyFromExam.question.map(c => c.time).reduce((accumulator, currentValue) => accumulator + currentValue);
        var stileTime = this.calcTime(this.exam);
        var mstileTime = stileTime * 1000;
        if (stileTime > 0) {
          setTimeout(() => {
            this.StartExam();
          }, mstileTime);
        } else if (stileTime == 0) {
          this.StartExam();
        } else {
          this.DeleteQuestionsByTime(stileTime);
          this.GetQuestion();

        }
      }
    });

  }
  DeleteQuestionsByTime(stileTime) {
    stileTime = Math.abs(stileTime);
    // debugger;  
    stileTime /= 60;
    while (stileTime > 1) {
      var question = this.copyFromExam.question[0];
      if (question.time < stileTime) {
        this.copyFromExam.question.splice(0, 1);
        stileTime -= question.time;
      }
    }
  }
  ShowQuestion(question) {
   
    //this.currentQuestion =question;
    question.enabled = true;
    setTimeout(() => {
      question.enabled = false;
      this.GetQuestion();
    }, question.time * 60 * 1000);
  }
  GetQuestion() {
    var question = this.copyFromExam.question[0];
    this.currentQuestion = question;
    this.ShowQuestion(question);
    this.copyFromExam.question.splice(0, 1);
    if (this.copyFromExam.question.length == 0) {
      // this.endTimeExam = true
      // this.findExamToDay = false
      // this.noExamToDay = false
      return;
    }
  }
  StartExam() {
    var question = this.copyFromExam.question[0];
    this.copyFromExam.question.splice(0, 1);
    this.ShowQuestion(question);
  }
  calcTime(exam) {
    var examTime = exam.date.split('T')[1].split(":");
    examTime = (Number(examTime[0]) * 3600) + (Number(examTime[1]) * 60) + Number(examTime[2]);
    var today = new Date();
    var time = (Number(today.getHours()) * 3600) + (Number(today.getMinutes() * 60)) + Number(today.getSeconds());
    return examTime - time;
  }
  addAnswer() {
    this.Answer = new Answer
    localStorage.removeItem('answers')
    this.Answer.Id = this.currentQuestion.id
    this.Answer.Answer = this.currentQuestion.C1
    this.Answers.push(this.Answer)
    localStorage.setItem('answers', JSON.stringify(this.Answers))
    this.GetQuestion()
  }
  addAnswers() {
    if (this.currentQuestion.C1)
      this.addAnswer()
    this.examService.Answer(this.Answers).subscribe(res => {
      this.Answers = []
      localStorage.removeItem('answers')
      this.exam = null
      this.findExamToDay = false
      this.endTimeExam = true
    }, err => {
      //  localStorage.removeItem('answers')

    })
  }


}
