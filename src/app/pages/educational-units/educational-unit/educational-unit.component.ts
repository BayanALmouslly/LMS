import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-educational-unit',
  templateUrl: './educational-unit.component.html',
  styleUrls: ['./educational-unit.component.scss']
})
export class EducationalUnitComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
showUnit(){
  this.router.navigate(['/pages/educationalunit/unit']);
}
nextStep(){
  this.router.navigate(['/pages/discussions']);

}
downloadFile() {
  window.location.href='./assets/unit1.pdf';
}
}
