import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
  {
    image: 'assets/logo/wallet.svg',
    title: 'Set up your wallet',
    details: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.'
  },
  {
    image: 'assets/logo/collection.svg',
    title: 'Create your collection',
    details: 'Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.'
  },
  {
    image: 'assets/logo/image.svg',
    title: 'Add your NFTs',
    details: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.'
  },
  {
    image: 'assets/logo/tag.svg',
    title: 'List them for sale',
    details: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!'
  }
];

}
