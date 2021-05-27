import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Exam } from '../../../model/exam/exam.model';
import { ExamService } from '../../../service/exam.service';

@Component({
  selector: 'ngx-show-exams',
  templateUrl: './show-exams.component.html',
  styleUrls: ['./show-exams.component.scss']
})
export class ShowExamsComponent implements OnInit {

  constructor(private examservvice:ExamService,
    private toastrService: NbToastrService) { }
exams:Exam[]=[]
questions:any[]=[]
  ngOnInit(): void {
    this.Get()
  }
Get(){
  this.examservvice.Get().subscribe(res=>{
    this.exams=res
    console.log(res)
  })
}
Questions(question){
this.questions=[]
this.questions=question
}
delete(exam,position){
  this.examservvice.Delete(exam.id).subscribe(res=>{
    this.exams=this.exams.filter(e=>e!=exam)
    this.toastrService.show(
      status || 'تم الحذف بنجاح',
      `حذف`,
      { position, status });

  })
}
}
