import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/student.model';
import { StudentsService } from '../../../service/students.service';

@Component({
  selector: 'ngx-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.scss']
})
export class ShowStudentComponent implements OnInit {

  constructor(private studentService: StudentsService) { }
  student: Student
  students: Student[] = []
  ngOnInit(): void {
    this.student = new Student()
  }
  addStudent() {
    //  this.studentService.Add(this.student).subscribe(res=>{

    //  })
    this.students.push(this.student)
    this.student = new Student()
  }
  delete(item){
    this.students=this.students.filter(a=>a!=item)
  }
}
