import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  systemUser: any;

  form: any = {
    sid: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthServiceService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    if(this.isLoggedIn == true){
      this.naviagePage();
    }
  }

  login(): void {
    const { sid, password } = this.form;

    this.authService.login(sid, password).subscribe(
      data => {
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        if(this.isLoggedIn){
          this.naviagePage();
        }
        else{
          this.errorMessage = "The S-ID or Password is incorrect"
          this.reloadPage();
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

  }

  naviagePage(): void {
    this.router.navigate(['dashboard']);
  }

  reloadPage(): void {
    window.location.reload();
  }


}
