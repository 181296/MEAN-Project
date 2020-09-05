import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhilai',
  templateUrl: './bhilai.component.html',
  styleUrls: ['./bhilai.component.css']
})
export class BhilaiComponent implements OnInit {

  cityName = 'Bhilai';

  btn = 'Order from here';

  resto1 = "Domino's Pizza";
  resto2 = "Cafe Coffe Day";
  resto3 = 'Dhillon Resto';

  restoInfo1 = 'Pizza';
  restoInfo2 = 'Cafe,Fast Food';
  restoInfo3 = 'North Indian, Biryani, Chinese';

  constructor() { }

  ngOnInit(): void {
  }

}