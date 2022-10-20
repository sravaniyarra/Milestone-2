import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    constructor(public r:Router) { }
      onSubmit(loginForm:NgForm){
      console.log(loginForm.value)
     alert("successfully logged in")}
     show(){
      this.r.navigate(['/manage-details'])
   
  }
    onClick(){
      this.r.navigate(['/update-detais'])
    }

  }




  
 
  

