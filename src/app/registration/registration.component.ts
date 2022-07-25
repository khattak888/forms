import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 topics:string[]=['C','C++','Java','Javascript','Angular','React'];
 
  constructor() { }
  

  ngOnInit(): void {
  }
  submitForm(registrationForm:any) : void 
  {
    console.log(registrationForm.value)
  }

}
