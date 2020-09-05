import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    phone: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  async checkUser() {
    const data = this.fbFormGroup.value;
    console.log(data);

    const url = 'http://localhost:5500/logincheck';
    const Message: any = await this.http.post(url, data).toPromise();
    console.log(Message);
    if(Message) {
      
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
      this.fbFormGroup.reset();
    }
    else {
      this.uiInvalidCredential = true;
      this.fbFormGroup.reset();
    }
   
  }

}
