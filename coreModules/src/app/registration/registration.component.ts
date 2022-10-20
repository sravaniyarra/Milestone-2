import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public signupForm !:FormGroup;
  constructor(public register:ServiceService,private formBuilder :FormBuilder,private http:HttpClient,private router :Router){}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/SignUpUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("SignUp Successfull");
      this.signupForm.reset();
      this.router.navigate(['login'])}
    )
  }
   
}

