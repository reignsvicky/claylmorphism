import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data = [
    // {
    //   background: 'assets/background/4.jpg',
    //   profile: 'assets/background/1.jpg',
    //   name: 'Kacii Eleven',
    //   details:
    //     ' consectetur adipisicing elit.   commodi rerum minus voluptatum sed',
    // },
    // {
    //   background: 'assets/background/6.jpg',
    //   profile: 'assets/background/2.jpg',
    //   name: 'Toomuch lang',
    //   details:
    //     ' Odio animi fugiat consectetur corrupti, doloremque minus voluptatum sed',
    // },
    {
      background: 'assets/background/1.jpg',
      profile: 'assets/background/3.jpg',
      name: 'Adam rock',
      details:
        ' amet consectetur adipisicing elit doloremque minus voluptatum sed',
    },
    {
      background: 'assets/background/9.jpg',
      profile: 'assets/background/4.jpg',
      name: 'Justin cambreal',
      details:
        ' dolor sit amet consectetur adipisicing elit. commodi voluptatum sed',
    },
    {
      background: 'assets/background/8.jpg',
      profile: 'assets/background/5.jpg',
      name: 'Adem john',
      details:
        ' sit amet consectetur adipisicingit commodi remqu voluptatum sed',
    },
    {
      background: 'assets/background/5.jpg',
      profile: 'assets/background/6.jpg',
      name: 'Sam kolder',
      details:
        ' animi fugiat consectetur satatupti, doloremque minus voluptatum sed',
    },
    {
      background: 'assets/background/8.jpg',
      profile: 'assets/background/7.jpg',
      name: 'Jacob isravel',
      details:' amet consectetur adipisicing elit. Odio animi fugiat con'
    },
    {
      background: 'assets/background/6.jpg',
      profile: 'assets/background/8.jpg',
      name: 'Kacii Eleven',
      details:
        ' saepe debitis, necessitatibus porro toloremque minus voluptatum sed',
    },
    {
      background: 'assets/background/1.jpg',
      profile: 'assets/background/9.jpg',
      name: 'Brock lesner',
      details:
        ' Lorem ipsum dolor sit ame Odio voluptatum sed',
    },
    {
      background: 'assets/background/7.jpg',
      profile: 'assets/background/10.jpg',
      name: 'Stone cold steave austin',
      details:
        ' Lorem ipsum pisicing elit. Odio animi fugiat us voluptatum sed',
    }
  ];
}
