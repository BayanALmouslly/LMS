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

  constructor(private examservice:ExamService,
    private toastrService: NbToastrService) { }
  exam: Exam = new Exam
  quetion:quetion=new quetion
  ngOnInit(): void {
    this.exam.Quetions=[]
  }
  addQuetion(){
    this.exam.Quetions.push(this.quetion)
  }
  deleteQuthion(quetion){
    this.exam.Quetions= this.exam.Quetions.filter(q=>q!=quetion)
  }
  addExam(position){
    console.log( this.exam)
    this.examservice.Add(this.exam).subscribe(res=>{
      this.toastrService.show(
        status || 'تمت الإضافة بنجاح',
        `اضافة`,
        { position, status });
        this.exam=new Exam
    })
  }
}
