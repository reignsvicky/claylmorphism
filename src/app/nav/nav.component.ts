import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  enable = false;
  constructor() { 
    setTimeout(() => {
      this.enable = true;
    },2000)
  }

  ngOnInit(): void {
  }


}
