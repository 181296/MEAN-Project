import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    password1: ['', Validators.required],
    password2: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  async resetUser() {
    const data = this.fbFormGroup.value;
    console.log(data);
    if(data.password1 === data.password2) {
      const url = 'http://localhost:5500/resetadd';
      const Message: any = await this.http.put(url, data).toPromise();
      if(Message.result) {
        this.router.navigate(['login']);
      }
    }
    else {
      this.uiInvalidCredential = true;
    }
    
    this.fbFormGroup.reset();
  }


}
