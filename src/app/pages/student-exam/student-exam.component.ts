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
        console.log(stileTime);
        if (stileTime > 0) {
          setTimeout(() => {
            this.StartExam();
          }, mstileTime);
        } else if (stileTime == 0) {
          console.log('2');
          this.StartExam();
        } else {
          console.log('3');
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
      console.log(question);
      if (question.time < stileTime) {
        console.log('-----------------------');
        console.log(this.copyFromExam.question);
        this.copyFromExam.question.splice(0, 1);
        console.log(this.copyFromExam.question);
        stileTime -= question.time;
      }
    }
  }
  ShowQuestion(question) {
    console.log(question);
    console.log("---------------------------------------");
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
    console.log(this.Answers)
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
  // get() {

  // }
  // afterGetExam() {
  //   this.removequestiontimeout();

  //   this.enabledQuetions();
  // }
  // async enabledQuetions() {
  //   //enabled question
  //   var time = 0
  //   for (let i = 0; i < this.exam.question.length; i++) {
  //     this.exam.question[0].enabled = true
  //     if (i != 0)
  //       var now = new Date()
  //     let dateFormat = require('dateformat');
  //     if (dateFormat(now, "h") == dateFormat(this.exam.date, "h")) {
  //       var date = dateFormat(now, "MM") - dateFormat(this.exam.date, "MM")
  //       if (date < 0) this.exam.question[i].enabled = false
  //       if (date >= 0) {
  //         if (i == 0) {
  //           time = this.exam.question[i].time
  //           await this.timeQuestion(this.exam.question[i], this.exam.question[i + 1], time)
  //         }
  //         else
  //           if (i != 0) {
  //             time += this.exam.question[i - 1].time
  //             await this.timeQuestion(this.exam.question[i], this.exam.question[i + 1], time)
  //           }
  //       }
  //       this.exam.question[i].enabled = false
  //       if (i < this.exam.question.length) {
  //         console.log("hhhhhh");
  //         console.log(i + 1);
  //         console.log(this.exam.question);
  //         console.log(this.exam.question[i + 1]);
  //         this.exam.question[i + 1].enabled = true
  //       }
  //       if (date > time) {
  //         this.exam.question[i].enabled = false
  //         if (i < this.exam.question.length)
  //           this.exam.question[i + 1].enabled = true

  //       }
  //       if (date > this.timeExam) {
  //         this.findExamToDay = false
  //         this.endTimeExam = true
  //         return
  //       }
  //     }
  //     else {
  //       this.exam.question[i].enabled = false
  //       if (i < this.exam.question.length)
  //         this.exam.question[i + 1].enabled = true

  //     }
  //   }
  // }
  // removequestiontimeout() {
  //   //remove question timeout
  //   var timeout = 0
  //   this.tempQ = [...this.exam.question]
  //   this.exam.question.forEach(q => {
  //     var now = new Date()
  //     let dateFormat = require('dateformat');
  //     if (dateFormat(now, "h") == dateFormat(this.exam.date, "h")) {
  //       var date = dateFormat(now, "MM") - dateFormat(this.exam.date, "MM")
  //       timeout += q.time
  //       if (date > timeout) {
  //         this.tempQ = [... this.tempQ.filter(q1 => q1 != q)]
  //       }
  //     }
  //   })
  //   this.exam.question = [...this.tempQ]
  // }
  // // enabledQuetions(question, nextquestion, time) {
  // //   this.date = new Date()
  // //   if (this.date <= this.exam.Date)
  // //     this.enabled = true
  // // }
  // async timeQuestion(question, nextquestion, time) {
  //   console.log("timeQuestion");
  //   await setTimeout(() => {
  //     question.enabled = false
  //     // nextquestion.enabled = true
  //   }, 1 * 1 * 5000)

  // }


}
