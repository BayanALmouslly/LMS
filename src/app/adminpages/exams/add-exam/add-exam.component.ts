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
  CorrectChoise(index) {
    switch (index) {
      case 1:
        this.quetion.Correct = this.quetion.Choise1
        break
      case 2:
        this.quetion.Correct = this.quetion.Choise2
        break
      case 3:
        this.quetion.Correct = this.quetion.Choise3
        break
      case 4:
        this.quetion.Correct = this.quetion.Choise4
        break
    }

  }
  addQuetion() {
    this.exam.Quetions.push(this.quetion)
    this.quetion=new quetion()
  }
  deleteQuthion(quetion) {
    this.exam.Quetions = this.exam.Quetions.filter(q => q != quetion)
  }
  addExam(position) {
    console.log(this.exam)
    this.examservice.Add(this.exam).subscribe(res => {
      this.toastrService.show(
        status || 'تمت الإضافة بنجاح',
        `اضافة`,
        { position, status });
      this.exam = new Exam
    })
  }

}
