import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satara',
  templateUrl: './satara.component.html',
  styleUrls: ['./satara.component.css']
})
export class SataraComponent implements OnInit {

  cityName = 'Satara';

  btn = 'Order from here';

  resto1 = "Domino's Pizza";
  resto2 = "McDonald's";
  resto3 = 'Hotel Amrapali';

  restoInfo1 = 'Pizza';
  restoInfo2 = 'Fast Food';
  restoInfo3 = 'North Indian, South Indian';


  constructor() { }

  ngOnInit(): void {
  }

}