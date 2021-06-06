import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Exam, quetion } from '../../../model/exam/exam.model';
import { ExamService } from '../../../service/exam.service';

@Component({
  selector: 'ngx-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {

  constructor(private examservice: ExamService,
    private toastrService: NbToastrService) { }
  exam: Exam = new Exam
  quetion: quetion = new quetion
  ngOnInit(): void {
    this.exam.Quetions = []
  }
  
  addQuetion() {
    console.log(this.quetion)
    if (this.quetion.C1 == "1") {
      this.quetion.Correct = this.quetion.Choise1
    } else if (this.quetion.C1 == "2")
      this.quetion.Correct = this.quetion.Choise2
    else if (this.quetion.C1 == "3")
      this.quetion.Correct = this.quetion.Choise3
    else if (this.quetion.C1 == "4")
      this.quetion.Correct = this.quetion.Choise4
    if (!this.quetion.Choise1 || !this.quetion.Choise2
      || !this.quetion.Choise3 || !this.quetion.Choise4
      || !this.quetion.Question || !this.quetion.Correct
      || !this.quetion.Time) {
      this.toastrService.show(
        status || 'يجب ملئ جميع القيم',
        `خطأ`,
        { status });
      return
    }
    this.exam.Quetions.push(this.quetion)
    this.quetion = new quetion()
  }
  deleteQuthion(quetion) {
    this.exam.Quetions = this.exam.Quetions.filter(q => q != quetion)
  }
  addExam(position) {
    if(!this.exam.Date||!this.exam.Title||this.exam.Quetions.length==0)
    {
      this.toastrService.show(
        status || 'يجب ملئ جميع القيم',
        `خطأ`,
        { status });
      return
    }
    this.examservice.Add(this.exam).subscribe(res => {
      this.toastrService.show(
        status || 'تمت الإضافة بنجاح',
        `اضافة`,
        { position, status });
      this.exam = new Exam
    })
  }

}
