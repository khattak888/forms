import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent  {

  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])

  })
  loginUser(){
    console.log(this.loginForm.value)
  }
  get user()
  {
    return this.loginForm.get('user')
  }
  
  get password()
  {
    return this.loginForm.get('password')
  }
 

}
