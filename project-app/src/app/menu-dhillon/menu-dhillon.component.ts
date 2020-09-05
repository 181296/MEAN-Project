import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dhillon',
  templateUrl: './menu-dhillon.component.html',
  styleUrls: ['./menu-dhillon.component.css']
})
export class MenuDhillonComponent implements OnInit {
  restoName = "Dhillon Resto";

  menuList = [
    { title: 'Chicken Maharaja Mac', price: 'Rs.205' },
    { title: 'Big Spicy Paneer Wrap', price: 'Rs.195' },
    { title: 'McSpicy Chicken Burger', price: 'Rs.164' },
    { title: 'Non Veg Family Snack Combo', price: 'Rs.905' },
    { title: 'Big Spicy Chicken Wrap', price: 'Rs.205' },
    { title: ' Non Veg Loaded', price: 'Rs.155' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}