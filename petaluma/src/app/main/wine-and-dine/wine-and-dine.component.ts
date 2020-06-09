import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-and-dine',
  templateUrl: './wine-and-dine.component.html',
  styleUrls: ['./wine-and-dine.component.scss']
})
export class WineAndDineComponent implements OnInit {

  topPicks = [
    { name: 'Cucina Paradiso', img: '/assets/images/restaurants/cp.jpg', delay: (Math.random() * 1.5) + 1 + 's', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    // { name: 'Andresen’s', img: '/assets/images/events/beer_fest.jpg', delay: (Math.random() * 1.5) + 1 + 's', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    { name: 'Vine & Barrel', img: '/assets/images/restaurants/vb.jpg', delay: (Math.random() * 1.5) + 1 + 's', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    // { name: 'Central Market', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'Wild Goat Bistro', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'The Shuckery', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: "Sax's Joint", img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'The Block', img: '/assets/images/restaurants/block.jpg', delay: (Math.random() * 1.5) + 1 + 's', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    // { name: 'Whisper Sisters', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'Mario & John’s', img: '/assets/images/resturants/beer.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'Water Street Bistro', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'Della Fattoria Downtown', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'Sugo', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'Risibisi', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'Speakeasy', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'La Dolce Vita Wine Lounge', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'INCAVO Wine Lounge & Collective', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    // { name: 'Jamison’s Roaring Donkey', img: '/assets/images/resturants/beer.png', delay: (Math.random() * 1.5) + 1 + 's'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
