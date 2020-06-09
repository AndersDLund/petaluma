import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  featuredEvent = {
    name: 'Hundreds turn out for second weekend of Petaluma’s Black Lives Matter demonstrations',
    img: 'assets/images/news/blm.jpg',
    date: '06/3/2020'
  }

  ngOnInit() {
    // this.featuredEvent = events.events[3];
  }

}
