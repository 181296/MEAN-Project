import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  forgotCall() {
    const data = this.fbFormGroup.value;
    console.log(data);

    /*const url = 'http://localhost:5500/logincheck';
    const result: any = await this.http.post(url, data).toPromise();
    if(result.opr) {
      this.router.navigate(['dhillon']);
    }
    */
    this.fbFormGroup.reset();
  }

}