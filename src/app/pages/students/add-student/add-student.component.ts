import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/student.model';
import { StudentsService } from '../../../service/students.service';

@Component({
  selector: 'ngx-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService: StudentsService) { }
  student: Student
  ngOnInit(): void {
    this.student = new Student()
  }
  addStudent() {
   this.studentService.Add(this.student).subscribe(res=>{
     
   })
  }
}
