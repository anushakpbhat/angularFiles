import { getLocaleDayNames } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  name="anusha";
  getN(){
    return console.log(this.name); 
  }

  getVal(names){
    console.log(names);
    return names;
  }
  getVar(namee){
    console.log(namee);
    return namee;
  }
  getPc(namess){
    console.log(namess);
    return namess;
  }
  
}

