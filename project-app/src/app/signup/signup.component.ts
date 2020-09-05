import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public uiInvalidCredential = false;


  public fbFormGroup = this.fb.group({
    phone: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(12), Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async registerUser() {
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:5500/signup';
    await this.http.post(url, data).toPromise();

    this.fbFormGroup.reset();
  }

}

