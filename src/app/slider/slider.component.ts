import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // scroll right and left function
  public scrollLeft() {
    let adElement: any = document.getElementById('scroll');
    adElement.scrollLeft += 800;
  }

  public scrollRight() {
    let adElement: any = document.getElementById('scroll');
    let actualPosition: any = adElement.scrollLeft;
    adElement.scrollLeft = actualPosition - 800;
  }

}
