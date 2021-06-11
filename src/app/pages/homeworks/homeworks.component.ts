import { Component, OnInit, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { HomeworkService } from '../../service/homework.service';

@Component({
  selector: 'ngx-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {

  constructor(private homeworkservice: HomeworkService,
    private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }
  file
  files: any[] = []
  Add() {
    this.files.push(this.file)
    this.file = null
  }
  cancel(f) {
    this.files = this.files.filter(fi => fi != f)
  }
  sendFiles() {
    if (!this.file) {
      this.toastrService.show(
        status || 'يجب اختيار ملف ثم الضغط على زر الارسال',
        ``,
        { status });
      return
    }
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
    this.file = this.fileInput.nativeElement.files[0];
  }
}
