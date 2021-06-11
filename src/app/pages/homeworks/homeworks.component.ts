import { Component, OnInit, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Homework } from '../../model/homework.model';
import { HomeworkService } from '../../service/homework.service';

@Component({
  selector: 'ngx-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {

  constructor(private homeworkservice: HomeworkService,
    private toastrService: NbToastrService) { }
    userLogin =JSON.parse (localStorage.getItem('login'))

  ngOnInit(): void {
    this.file=new Homework
    console.log(this.userLogin)
  }
  file:Homework
  files: any[] = []
  Add() {
    this.files.push(this.file)
    this.file = null
  }
  cancel(f) {
    this.files = this.files.filter(fi => fi != f)
  }
  sendFiles() {
    if (!this.file.File) {
      this.toastrService.show(
        status || 'يجب اختيار ملف ثم الضغط على زر الارسال',
        ``,
        { status });
      return
    }
    this.file.UserId=this.userLogin.id
    this.homeworkservice.Add(this.file).subscribe(res => {
      // this.files = []
      this.file = null
      this.toastrService.show(
        status || 'تم ارسال الملف بنجاح',
        ``,
        { status });
    })
  }
  @ViewChild('fileInput') fileInput;
  public stageFile(): void {
    this.file.File = this.fileInput.nativeElement.files[0];
  }
}
