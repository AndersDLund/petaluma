import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  places = [
    {name: 'By the Water', img: '/assets/images/explore/coast.jpg', segment: 'Around'},
    {name: 'Wine Country', img: '/assets/images/explore/wine.jpg', segment: 'The'},
    {name: 'San Francisco', img: '/assets/images/explore/sf.jpg', segment: 'Town'}

    // {name: 'The Mountains', img: '/assets/images/explore/hikes.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
