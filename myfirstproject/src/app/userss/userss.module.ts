import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginsComponent } from './logins/logins.component';



@NgModule({
  declarations: [
    LoginsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginsComponent
  ]
})
export class UserssModule { }
