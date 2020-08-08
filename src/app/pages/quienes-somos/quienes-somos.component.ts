import { Component, OnInit } from '@angular/core';
declare var init_plugins;

@Component({
  selector: 'app-quienes-somos-page',
  templateUrl: './quienes-somos.component.html',
  styles: []
})
export class QuienesSomosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
