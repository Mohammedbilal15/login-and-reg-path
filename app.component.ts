import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from './DemoService'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
  loginForm: FormGroup;
  loginForm2: FormGroup;

  constructor(private apiService: ConfigService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
      gender: new FormControl(''),
      
    });
    
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
  console.log(this.f.username.value, this.f.password.value)
  this.apiService.getLoginDetails(this.f.username.value, this.f.password.value).subscribe(res => {
    console.log(res)
    if(res){
      alert("loggedIn")
    }
  },
  err => alert("Invalid username and password"));
  }
  get s() { return this.loginForm.controls; }
  onSubmit1() {
  console.log(this.s.name.value, this.s.username.value, this.s.password.value, this.s.gender.value)
  this.apiService.getregDetails(this.s.name.value, this.s.username.value, this.s.password.value, this.s.gender.value).subscribe(res => {
    console.log(res)
    if(res){
      alert("loggedIn")
    }
  },
  err => alert("Invalid username and password"));
  }
 
 
  
}
