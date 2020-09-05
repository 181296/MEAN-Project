import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mumbai',
  templateUrl: './mumbai.component.html',
  styleUrls: ['./mumbai.component.css']
})
export class MumbaiComponent implements OnInit {

  cityName = 'Mumbai';

  btn = 'Order from here';

  resto1 = "Domino's Pizza";
  resto2 = "McDonald's";
  resto3 = 'Cafe Coffe Day';
  resto4 = ' Nair on Fire';
  resto5 = 'The Bombay Chopstic';
  resto6 = 'Zesty Kitchen';

  restoInfo1 = 'Pizza';
  restoInfo2 = 'Fast Food';
  restoInfo3 = 'Cafe,Fast Food';
  restoInfo4 = 'Kerala, Indian, South Indian';
  restoInfo5 = 'Continental, Chinese, Beverages';
  restoInfo6 = 'Indian, Seafood';

  constructor() { }

  ngOnInit(): void {
  }

}
