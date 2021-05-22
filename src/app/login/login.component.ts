import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { Auth } from './auth.model';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthServiceService) { }
  username
  password
  auth:Auth
  ngOnInit(): void {
    this.auth=new Auth()
  }
  loading = false;

  login() {
    this.loading=true
    if(!this.auth.Password||!this.auth.EMail)return
    this.authservice.login(this.auth).subscribe(res => {
      this.loading=false
      let user = (<Auth>res).token;
      localStorage.setItem('login', JSON.stringify(res));
      localStorage.setItem('user', user);
      if(res.isAdmin==true)
      this.router.navigate(['admin'])
      else
      this.router.navigateByUrl('pages/homepage');
    },err=>{
      this.loading=false

    })

  }
}
