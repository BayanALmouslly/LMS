import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../service/homework.service';

@Component({
  selector: 'ngx-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {

  constructor(private homeworkservice: HomeworkService) { }

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
    if (this.files.length == 0) return
    this.homeworkservice.Add(this.files).subscribe(res => {
      this.files = []
      this.file = null
    })
  }
}
