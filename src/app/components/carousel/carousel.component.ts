import { Component, OnInit } from '@angular/core';
declare var init_plugins;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }


}
