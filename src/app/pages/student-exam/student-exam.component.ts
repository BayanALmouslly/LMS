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
  exam: Exam=new Exam
  findExamToDay: boolean = false
  enabled: boolean = false
  Answer: Answer = new Answer
  Answers: Answer[] = []
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
    console.log({ Year: yyyy, Month: mm, Day: dd, Hour: h, Minit: m })
    this.examService.GetCurrentExamForStudent({ Year: yyyy, Month: mm, Day: dd, Hour: h, Minit: m }).subscribe(res => {
      console.log(res)

      if (!res)
        this.findExamToDay = false
      else {
        console.log(res)
        this.exam =res.examStudentDto as Exam
        this.exam.question=res.questions
        console.log(this.exam)
        this.findExamToDay = true
        this.exam.question.forEach(element => {
          element.enabled = true
        });
        for(let i=0;i<this.exam.question.length;i++){
          for(let j=0;j<this.exam.question.length;j++){
            this.exam.question[i].time+=this.exam.question[j].time
          }
        }
        this.exam.question.forEach(element => {
          this.timeQuestion(element)
        });
      }
    })
  }
  enabledQuetions() {
    this.date = new Date()
    // console.log(this.date)
    if (this.date <= this.exam.Date)
      this.enabled = true
  }
  timeQuestion(question) {
    setTimeout(() => question.enabled = false, question.time * 60 * 1000)
  }
  addAnswer(question) {
    console.log(question)
    this.Answer.Id = question.id
    this.Answer.Answer = question.C1
    this.Answers.push(this.Answer)
    question.enabled = false
  }
  addAnswers() {
    this.examService.Answer(this.Answers).subscribe(res => {
      this.exam = null
    })
  }
  ////////////////////////////////////////////////////////////
  private subscription: Subscription;
  
    public dateNow = new Date();
    public dDay = new Date('Jan 01 2021 00:00:00');
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference;
    public secondsToDday;
    public minutesToDday;
    public hoursToDday;
    public daysToDday;


    private getTimeDifference () {
        this.timeDifference = this.dDay.getTime() - new  Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }

  private allocateTimeUnits (timeDifference) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

    

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }
}
