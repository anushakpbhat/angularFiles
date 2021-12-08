import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-navsbar',
  templateUrl: './navsbar.component.html',
  styleUrls: ['./navsbar.component.css']
})
export class NavsbarComponent implements OnInit {
  myReactiveForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
   this.myReactiveForm=new FormGroup({
     'fname':new FormControl(null),
     'lname':new FormControl(null),
     'email':new FormControl(null),
     'password':new FormControl(null,[Validators.email,Validators.required])

   });
  }
  onSubmit(){
    console.log(this.myReactiveForm);
  }

}
