import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-ccd',
  templateUrl: './menu-ccd.component.html',
  styleUrls: ['./menu-ccd.component.css']
})
export class MenuCcdComponent implements OnInit {

  restoName = "Cafe Coffe Day";

  menuList = [
    { title: 'Cafe Mocha', price: 'Rs.169' },
    { title: 'King Latte', price: 'Rs.169' },
    { title: 'Signature Cold Cofee', price: 'Rs.179' },
    { title: 'Mixed Fruit Smoothie', price: 'Rs.179' },
    { title: 'Blueberry Cake', price: 'Rs.499' },
    { title: 'Mango Milkshake', price: 'Rs.155' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}