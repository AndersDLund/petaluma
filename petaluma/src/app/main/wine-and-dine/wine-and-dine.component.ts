import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-and-dine',
  templateUrl: './wine-and-dine.component.html',
  styleUrls: ['./wine-and-dine.component.scss']
})
export class WineAndDineComponent implements OnInit {

  topPicks = [
    { name: 'Cucina Paradiso', img: '/assets/images/resturants/food.png'},
    { name: 'Central Market', img: '/assets/images/resturants/food.png'},
    { name: 'Wild Goat Bistro', img: '/assets/images/resturants/food.png'},
    { name: 'The Shuckery', img: '/assets/images/resturants/food.png'},
    { name: "Sax's Joint", img: '/assets/images/resturants/food.png'},
    { name: 'Water Street Bistro', img: '/assets/images/resturants/food.png'},
    { name: 'Della Fattoria Downtown', img: '/assets/images/resturants/food.png'},
    { name: 'Sugo', img: '/assets/images/resturants/food.png'},
    { name: 'Risibisi', img: '/assets/images/resturants/food.png'},

    { name: 'The Block', img: '/assets/images/resturants/beer.png' },
    { name: 'Whisper Sisters', img: '/assets/images/resturants/wine.png' },
    { name: 'Mario & John’s', img: '/assets/images/resturants/beer.png' },
    { name: 'Speakeasy', img: '/assets/images/resturants/wine.png' },
    { name: 'La Dolce Vita Wine Lounge', img: '/assets/images/resturants/wine.png' },
    { name: 'Andresen’s', img: '/assets/images/resturants/beer.png' },
    { name: 'Vine & Barrel', img: '/assets/images/resturants/wine.png' },
    { name: 'INCAVO Wine Lounge & Collective', img: '/assets/images/resturants/wine.png' },
    { name: 'Jamison’s Roaring Donkey', img: '/assets/images/resturants/beer.png' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
