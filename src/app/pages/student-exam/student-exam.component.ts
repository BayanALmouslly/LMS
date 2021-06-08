import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Answer, Exam } from '../../model/exam/exam.model';
import { ExamService } from '../../service/exam.service';

@Component({
  selector: 'ngx-student-exam',
  templateUrl: './student-exam.component.html',
  styleUrls: ['./student-exam.component.scss']
})
export class StudentExamComponent implements OnInit, OnDestroy {

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.GetCurrentExamForStudent()
    //this.enabledQuetions()
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
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
  GetCurrentExamForStudent() {
    this.date = new Date()
    var today = new Date();
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var time = h + ":" + m + ":" + s
    this.examService.GetCurrentExamForStudent({ Year: yyyy, Month: mm, Day: dd, Hour: h, Minit: m }).subscribe(res => {
      if (!res)
        this.noExamToDay = true
      else {
        this.noExamToDay = false
        this.findExamToDay = true
        this.exam = res.examStudentDto as Exam
        this.exam.question = res.questions
        this.findExamToDay = true
        this.timeExam = 0
        //calc time exam
        for (let i = 0; i < this.exam.question.length; i++) {
          this.timeExam += this.exam.question[i].time
        }
        if (this.exam.question.length == 0) {
          this.findExamToDay = false
          this.endTimeExam = true
          return
        }
        this.afterGetExam()

      }
    })
  }
  afterGetExam() {
    this.removequestiontimeout()
    
    console.log(this.exam.question)
    this.enabledQuetions();
  }
  enabledQuetions() {
    //enabled question
    var time = 0
    for (let i = 0; i < this.exam.question.length; i++) {
      this.exam.question[0].enabled = true
      var now = new Date()
      let dateFormat = require('dateformat');
      if (dateFormat(now, "h") == dateFormat(this.exam.date, "h")) {
        var date = dateFormat(now, "MM") - dateFormat(this.exam.date, "MM")
        if (date < 0) this.exam.question[i].enabled = false
        if (date >= 0) {
          if (i == 0) {
            time = this.exam.question[i].time
            this.timeQuestion(this.exam.question[i], this.exam.question[i + 1], time)
          }
          else
            if (i != 0) {
              time += this.exam.question[i - 1].time
              this.timeQuestion(this.exam.question[i], this.exam.question[i + 1], time)
            }
        }
        if (date > time) {
          this.exam.question[i].enabled = false
          console.log('time end q')
        }
        if (date > this.timeExam) {
          this.findExamToDay = false
          this.endTimeExam = true
          return
        }
      }
      else {
        console.log('end')
        this.exam.question[i].enabled = false
      }
      console.log(date)
    }
  }
  removequestiontimeout() {
    //remove question timeout
    var timeout = 0
    this.tempQ = [...this.exam.question]
    this.exam.question.forEach(q => {
      var now = new Date()
      let dateFormat = require('dateformat');
      if (dateFormat(now, "h") == dateFormat(this.exam.date, "h")) {
        var date = dateFormat(now, "MM") - dateFormat(this.exam.date, "MM")
        timeout += q.time
        if (date > timeout) {
          this.tempQ = [... this.tempQ.filter(q1 => q1 != q)]
        }
      }
    })
    this.exam.question = [...this.tempQ]
  }
  // enabledQuetions(question, nextquestion, time) {
  //   this.date = new Date()
  //   // console.log(this.date)
  //   if (this.date <= this.exam.Date)
  //     this.enabled = true
  // }
  timeQuestion(question, nextquestion, time) {
    setTimeout(() => {
      question.enabled = false
      // nextquestion.enabled = true
    }, time * 60 * 1000)

  }
  addAnswer(question) {
    console.log(question)
    this.Answer.Id = question.id
    this.Answer.Answer = question.C1
    this.Answers.push(this.Answer)
    question.enabled = false
    this.exam.question=[...this.exam.question.filter(q=>q!=question)]
    this.afterGetExam()
  }
  addAnswers() {
    this.examService.Answer(this.Answers).subscribe(res => {
      this.exam = null
      this.findExamToDay = false
          this.endTimeExam = true
    })
  }
  ////////////////////////////////////////////////////////////
  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Jan 01 2021 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;


  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
