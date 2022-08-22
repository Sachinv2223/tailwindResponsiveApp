import { Destination } from './model/destination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  destinations: Destination[] = [
    {
      "city": "Toronto",
      "avgPrice": 120,
      "propertyCount": 76,
      "imgUrl": "https://media.istockphoto.com/photos/toronto-ontario-canada-picture-id500256497?b=1&k=20&m=500256497&s=170667a&w=0&h=fmyhMKeXUcYzSA8Yb0FePl3koZOy7B_UqaG9YN55YBg=",
      "imgAlt": "Toronto_img"
    },
    {
      "city": "Malibu",
      "avgPrice": 133,
      "propertyCount": 43,
      "imgUrl": "https://media.istockphoto.com/photos/surfrider-beach-malibu-night-picture-id1073991258?k=20&m=1073991258&s=612x612&w=0&h=EQOfbQNtIfZ_naAd8251Dtu80CnDZTuuLF6a_f6mHPc=",
      "imgAlt": "Malibu_img"
    },
    {
      "city": "Chicago",
      "avgPrice": 90,
      "propertyCount": 23,
      "imgUrl": "https://media.istockphoto.com/photos/dramatic-sunset-downtown-chicago-picture-id1204331594?b=1&k=20&m=1204331594&s=170667a&w=0&h=DYmAnf_omKcY0we0Q_Vd5hrt0CEBCxTsIkhwKeC-TpE=",
      "imgAlt": "Chicago_img"
    },
    {
      "city": "Seattle",
      "avgPrice": 101,
      "propertyCount": 62,
      "imgUrl": "https://media.istockphoto.com/photos/space-needle-and-seattle-downtown-picture-id507294292?b=1&k=20&m=507294292&s=170667a&w=0&h=rtRtATYvsbNu-mvuDdsrtTeSwDIn1AqaA8hqiR-Kr1w=",
      "imgAlt": "Seattle_img"
    },
    {
      "city": "Tokyo",
      "avgPrice": 160,
      "propertyCount": 98,
      "imgUrl": "https://media.istockphoto.com/photos/kabukicho-shinjuku-at-night-picture-id1330558677?b=1&k=20&m=1330558677&s=170667a&w=0&h=10l4A6mZSQ2-LvaRTwzCjIi7D057rY7HDmwgkOiLoZo=",
      "imgAlt": "Tokyo_img"
    },
    {
      "city": "Sidney",
      "avgPrice": 125,
      "propertyCount": 80,
      "imgUrl": "https://media.istockphoto.com/photos/view-of-sydney-harbour-australia-picture-id535455441?b=1&k=20&m=535455441&s=170667a&w=0&h=8ILO4PxG0MZ5kM-t6tl4DGsoQCYXlNpc4vIkY6SKtnU=",
      "imgAlt": "Sidney_img"
    }
  ]

}
