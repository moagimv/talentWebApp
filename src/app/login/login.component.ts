import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    sid: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    //private authService: AuthService,
    //private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    /*if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }*/
  }

  login(): void {
    const { sid, password } = this.form;

    if(this.form.sid === 's2026987' && this.form.password === '1234567'){
      this.naviagePage();
      this.isLoggedIn = true;
      this.isLoginFailed = true;
    } else {
      this.errorMessage = "S-ID or Password is incorrect";
      this.isLoginFailed = true;
      this.reloadPage();
    }

    /*this.authService.login(sid, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );*/
  }

  naviagePage(): void {
    this.router.navigate(['dashboard']);
  }

  reloadPage(): void {
    window.location.reload();
  }


}
