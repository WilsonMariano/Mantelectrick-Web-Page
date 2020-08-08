import { Component, OnInit } from '@angular/core';
declare var init_plugins;

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }
}
