import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-and-dine',
  templateUrl: './wine-and-dine.component.html',
  styleUrls: ['./wine-and-dine.component.scss']
})
export class WineAndDineComponent implements OnInit {

  topPicks = [
    { name: 'Cucina Paradiso', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Andresen’s', img: '/assets/images/resturants/beer.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Vine & Barrel', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Central Market', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Wild Goat Bistro', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'The Shuckery', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: "Sax's Joint", img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'The Block', img: '/assets/images/resturants/beer.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Whisper Sisters', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Mario & John’s', img: '/assets/images/resturants/beer.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Water Street Bistro', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Della Fattoria Downtown', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Sugo', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Risibisi', img: '/assets/images/resturants/food.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Speakeasy', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'La Dolce Vita Wine Lounge', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'INCAVO Wine Lounge & Collective', img: '/assets/images/resturants/wine.png', delay: (Math.random() * 1.5) + 1 + 's'},
    { name: 'Jamison’s Roaring Donkey', img: '/assets/images/resturants/beer.png', delay: (Math.random() * 1.5) + 1 + 's'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
