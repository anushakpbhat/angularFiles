import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  dateExample=Date();


  name:string='';
  dname:string='';
  exe:boolean=false;
  cis:boolean=false;
  book:boolean=false;
  online:boolean=false;
  phone:boolean=false;
  mag:boolean=false;
  onSubmit(formValue:NgForm){
    console.log(formValue.value)
  }
  resetForm(formValue:NgForm){
    formValue.reset();
  }
}
