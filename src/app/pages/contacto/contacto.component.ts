import { Component, OnInit } from '@angular/core';
declare var init_plugins;

@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
