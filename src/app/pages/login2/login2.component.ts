import { UserService } from './../../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router, 
    private authSvc: AuthService, 
    private toast: ToastrService, 
    private translate: TranslateService,
    private userSvc:UserService) { }

  ngOnInit(): void {
  }

  async login() {
    console.log(this.username)
    console.log(this.password)
    try {

      const response = await this.authSvc.login(this.username, this.password);
      console.log(response);
      if (response?.uid) {
        let log = {'uid':response.uid,'date': new Date()}
        const respLog = await this.userSvc.setLogUser(log)
        console.log(respLog);
        this.router.navigate(['home'])
      }
    } catch (e) {
      console.log(e)
      this.toast.error(this.translate.instant('error'), this.translate.instant('errorLogin'));
    }
  }

  loginAsGuest() {
    this.username = 'test@test.com'
    this.password = '123123123'
  }

}
