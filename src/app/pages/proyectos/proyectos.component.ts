import { Component, OnInit } from '@angular/core';
declare var init_plugins;

@Component({
  selector: 'app-proyectos-page',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }
}
