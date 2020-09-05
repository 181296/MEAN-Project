import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-amrapali',
  templateUrl: './menu-amrapali.component.html',
  styleUrls: ['./menu-amrapali.component.css']
})
export class MenuAmrapaliComponent implements OnInit {

  restoName = "Hotel Amrapali";

  menuList = [
    { title: 'Masala Dosa', price: 'Rs.59' },
    { title: 'Onion Uttapam', price: 'Rs.69' },
    { title: 'Butter Pav Bhaji', price: 'Rs.79' },
    { title: 'Veg Manchurian', price: 'Rs.139' },
    { title: 'Mango Milkshake', price: 'Rs.155' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}