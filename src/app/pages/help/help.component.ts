import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public router:Router) { }
  date=new Date

  ngOnInit(): void {
  }
StudentServies(){
  this.router.navigate(['/pages/help/servicestudent'])
}
support(){
  this.router.navigate(['/pages/help/support'])
}
}
