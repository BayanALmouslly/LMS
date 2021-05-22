import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Student } from '../../../model/student.model';
import { StudentsService } from '../../../service/students.service';

@Component({
  selector: 'ngx-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.scss']
})
export class ShowStudentComponent implements OnInit {

  constructor(private studentService: StudentsService,
    private toastrService: NbToastrService) { }
  student: Student
  students: Student[] = []
  ngOnInit(): void {
    this.student = new Student()
    this.get()
  }
  addStudent(position) {
     this.studentService.Add(this.student).subscribe(res=>{
      this.toastrService.show(
        status || 'تمت الإضافة بنجاح',
        `اضافة`,
        { position, status });
       this.student.name=this.student.Name
       this.student.eMail=this.student.Mail
      this.students.push(this.student)
      this.student = new Student()
      
     })   
  }
  delete(item,position){
    this.studentService.Delete(item.id).subscribe(res=>{
      this.students=this.students.filter(a=>a!=item)
      this.toastrService.show(
        status || 'تم الحذف بنجاح',
        `حذف`,
        { position, status });
     }) 
  }
  get(){
    this.studentService.Get().subscribe(res=>{
      this.students=res
      console.log(res)

    })
  }
}
