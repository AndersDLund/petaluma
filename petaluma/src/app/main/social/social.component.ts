import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  tweet = {
    handle: '@VisitPetalumaCA',
    caption: 'Hello weekend! @brewstersBG is open. Come enjoy delicious food and adult beverages on their huge, sunny patio. Face masks required. Reservations strongly recommend. Its going to be a beautiful day in Petaluma.',
    img: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
