import { Component, OnInit } from '@angular/core';

declare var require: any;
const events = require('../../../assets/db/events.json');

@Component({
  selector: 'app-featured-event',
  templateUrl: './featured-event.component.html',
  styleUrls: ['./featured-event.component.scss']
})
export class FeaturedEventComponent implements OnInit {

  constructor() { }
  featuredEvent;

  ngOnInit() {
    this.featuredEvent = events.events[3];
  }

}
