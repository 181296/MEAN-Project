import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pune',
  templateUrl: './pune.component.html',
  styleUrls: ['./pune.component.css']
})
export class PuneComponent implements OnInit {

  cityName = 'Pune';

  btn = 'Order from here';

  resto1 = "Domino's Pizza";
  resto2 = "McDonald's";
  resto3 = 'Cafe Coffe Day';
  resto4 = '100 Dosas';
  resto5 = 'The Oyester';


  restoInfo1 = 'Pizza';
  restoInfo2 = 'Fast Food';
  restoInfo3 = 'Cafe,Fast Food';
  restoInfo4 = 'South Indian, Indian';
  restoInfo5 = 'Continental, Chinese, Italian';


  constructor() { }

  ngOnInit(): void {
  }

}