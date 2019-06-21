import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  places = [
    {name: 'The Coast', img: '/assets/images/explore/coast.jpg'},
    {name: 'San Francisco', img: '/assets/images/explore/sf.jpg'},
    {name: 'Wine Country', img: '/assets/images/explore/wine.jpg'},
    {name: 'The Mountains', img: '/assets/images/explore/hikes.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
