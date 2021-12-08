import { Component, OnInit } from '@angular/core';
import { NeedDataService } from 'src/app/need-data.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  constructor(service:NeedDataService) {
    this.product=service.products;
   }

  ngOnInit(): void {
  }
product:any;
}
