import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeedDataService {

  constructor() { }
    products=[
      {
      person:"Peter",
      intrests:"Art"
    },
     {
        person:"Jhon",
        intrests:"Dance"
      },
        {
          person:"Robert",
          intrests:"Singing"
        }
      ]
    }
